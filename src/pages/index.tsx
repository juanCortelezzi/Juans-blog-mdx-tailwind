import type { NextPage } from "next";
import Layout from "@components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="JBC" desc="The JBC blog landing page">
      <main>
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Hey, I&apos;m <span className="text-bgreen">Juan Cortelezzi</span>
        </h1>
        <div className="py-2" />
        <p>
          I&apos;m a self taught web developer, currently studying software
          engeneering at UADE University. You&apos;ve found my personal slice of
          the internet, feel free to look around.
        </p>
        <div className="py-1" />
        <p>
          In this page you will be able to see my current projects by clicking
          on the <span className="text-bgreen">Projects</span> link up top, as
          well as taking a look at my latest posts/tutorials on the{" "}
          <span className="text-bgreen">Blog</span> link besides the projects
          one
        </p>
      </main>
    </Layout>
  );
};

export default Home;
