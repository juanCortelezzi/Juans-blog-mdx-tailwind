import type { NextPage } from "next";
import type { IPostFrontMatter } from "@lib/types";
import Image from "next/image";
import Center from "@components/center";
import Link from "next/link";
import fs from "fs";
import jspath from "path";
import matter from "gray-matter";
import Layout from "@components/layout";
import { postFilePaths, POSTS_PATH } from "@lib/mdx";
import { useState } from "react";

interface IPost {
  data: IPostFrontMatter;
  path: string;
}

interface IProps {
  posts: Array<IPost>;
}

const Blog: NextPage<IProps> = ({ posts }) => {
  const [results, setResults] = useState<IPost[]>(posts);
  return (
    <Layout title="JBC: Blog" desc="The JBC blog feed">
      <input
        type="text"
        placeholder="Project search..."
        className="w-full bg-gray-800 text-lg rounded-lg py-0.5 px-2 focus-visible:outline-none focus-visible:border"
        onChange={async (e) => {
          const { value } = e.currentTarget;

          // Dynamically load fuse
          const Fuse = (await import("fuse.js")).default;

          const fuse = new Fuse(posts, {
            keys: ["data.title", "data.desc", "data.date", "data.author"],
          });

          const searchResult = fuse.search(value).map((result) => result.item);

          // if there are none search results, go back to all projects
          const updatedResults = searchResult.length ? searchResult : posts;
          setResults(updatedResults);
        }}
      />
      <div className="mb-8" />
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-stretch place-items-stretch">
          {results.map(({ path, data }) => {
            return (
              <Link
                href={{ pathname: "/blog/[slug]", query: { slug: path } }}
                key={`post-${data.title}-${path}`}
              >
                <a className="group">
                  <div className="flex flex-col justify-between border border-gray-800 group-hover:border-bwhite rounded-md overflow-hidden h-full transition duration-150">
                    <div className="space-y-2">
                      <Center tail="relative h-72">
                        <Image
                          src={data.image}
                          alt={data.title}
                          layout="fill"
                          objectFit="cover"
                          priority
                        />
                      </Center>
                      <h2 className="self-start text-2xl font-semibold px-4 group-hover:text-bgreen transition duration-150">
                        {data.title}
                      </h2>
                    </div>
                    <p className="text-bgray px-4 py-3">
                      {data.date} &bull; {data.author}
                    </p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export function getStaticProps() {
  const posts: Array<IPost> = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(jspath.join(POSTS_PATH, filePath));
    const data = matter(source).data as IPostFrontMatter;
    const parsed = { ...data, date: new Date(data.date).toLocaleDateString() };

    return {
      data: parsed,
      path: filePath.replace(/\.mdx?$/, ""),
    };
  });

  return { props: { posts } };
}

export default Blog;
