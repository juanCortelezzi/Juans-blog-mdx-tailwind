import Head from "next/head";
import Navbar from "@components/navbar";
import Center from "@components/center";

interface IProps {
  title: string;
  desc: string;
}

const Layout: React.FC<IProps> = ({ children, title, desc }) => {
  return (
    <Center tail="mx-4">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-3xl w-full">
        <Navbar />

        <div className="my-8" />

        {children}
      </div>
    </Center>
  );
};

export default Layout;
