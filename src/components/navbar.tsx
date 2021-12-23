import Link from "next/link";

const linkStyle =
  "text-bgray text-xl transition duration-150 ease-in-out hover:text-bwhite";

const logoStyle =
  "font-medium text-3xl transition duration-150 ease-in-out hover:text-bgreen";

const Navbar: React.FC = () => {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-800">
      <Link href="/">
        <a className={logoStyle}>J.B.C</a>
      </Link>
      <div className="flex justify-between items-center space-x-4">
        <Link href="/blog">
          <a className={linkStyle}>Blog</a>
        </Link>
        <Link href="/projects">
          <a className={linkStyle}>Projects</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
