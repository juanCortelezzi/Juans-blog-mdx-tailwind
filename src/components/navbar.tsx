import Link from "next/link";
import { useRouter } from "next/router";

const logoStyle =
  "font-medium text-3xl transition duration-150 ease-in-out hover:text-bgreen";

const linkStyle =
  "text-bgray text-xl transition duration-150 ease-in-out hover:underline";

const linkSelectedStyle =
  "text-bwhite text-xl transition duration-150 ease-in-out hover:underline";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <header className="flex justify-between items-center py-3 border-b border-gray-800">
      <Link href="/">
        <a className={logoStyle}>J.B.C</a>
      </Link>
      <nav className="flex justify-between items-center space-x-4">
        <Link href="/blog">
          <a
            className={
              router.pathname == "/blog" ? linkSelectedStyle : linkStyle
            }
          >
            Blog
          </a>
        </Link>
        <Link href="/projects">
          <a
            className={
              router.pathname == "/projects" ? linkSelectedStyle : linkStyle
            }
          >
            Projects
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
