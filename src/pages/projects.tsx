import type { NextPage, InferGetStaticPropsType } from "next";
import Layout from "@components/layout";
import { useState } from "react";

interface IRawProject {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  html_url: string;
  [index: string]: any;
}

interface IProject {
  id: string;
  name: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
  url: string;
}

const Projects: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  projects,
}) => {
  const [results, setResults] = useState<IProject[]>(projects);

  return (
    <Layout title="JBC: Projects" desc="The JBC project display section">
      <input
        type="text"
        placeholder="Project search..."
        className="w-full bg-gray-800 text-lg rounded-lg py-0.5 px-2 focus-visible:outline-none focus-visible:border"
        onChange={async (e) => {
          const { value } = e.currentTarget;

          // Dynamically load fuse
          const Fuse = (await import("fuse.js")).default;

          const fuse = new Fuse(projects, {
            keys: ["name", "desc", "createdAt", "updatedAt"],
          });

          const searchResult = fuse.search(value).map((result) => result.item);

          // if there are none search results, go back to all projects
          const updatedResults = searchResult.length ? searchResult : projects;
          setResults(updatedResults);
        }}
      />
      <div className="mb-8" />
      <main>
        {results.map((project) => {
          return (
            <a
              key={`dc-${project.name}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card project={project} />
            </a>
          );
        })}
      </main>
    </Layout>
  );
};

const Card: React.FC<{ project: IProject }> = ({ project }) => {
  return (
    <div className="group border space-y-2 border-gray-800 rounded-md my-4 px-4 py-2 hover:border-bwhite transition duration-150">
      <h2 className="text-2xl font-semibold group-hover:text-bgreen transition duration-150">
        {project.name}
      </h2>
      <p>{project.desc}</p>
      <p className="text-bgray">
        Created at: {project.createdAt} &bull; Last updated: {project.updatedAt}
      </p>
    </div>
  );
};

export const getStaticProps = async () => {
  const revalidate = 3600;

  const rawProjects = await fetch(
    "https://api.github.com/users/juancortelezzi/repos"
  );

  const jsonProjects: IRawProject[] | null = await rawProjects.json();

  if (!jsonProjects) return { props: { projects: [] }, revalidate };

  const projects = jsonProjects.map(
    (p): IProject => ({
      id: p.id,
      name: p.name,
      desc: p.description,
      createdAt: new Date(p.created_at).toLocaleDateString(),
      updatedAt: new Date(p.updated_at).toLocaleDateString(),
      url: p.html_url,
    })
  );

  return {
    props: {
      projects,
    },
    revalidate,
  };
};

export default Projects;
