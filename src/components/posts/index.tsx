import { h1, h2, h3, h4, h5, h6 } from "@components/posts/headers";
import { inlineCode, pre, blockquote, div } from "@components/posts/code";
import { ul, ol } from "@components/posts/lists";
import { table, tbody } from "@components/posts/table";
import dynamic from "next/dynamic";

const hr: React.FC = ({ children }) => (
  <hr className="my-6 sm:my-10">{children}</hr>
);

const Img = dynamic(() => import("@components/posts/image"));

const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  hr,
  inlineCode,
  blockquote,
  table,
  tbody,
  div,
  pre,
};

function getComponents(heavyComponents: string[]) {
  return {
    ...components,
    Img: heavyComponents.includes("Img") ? Img : null,
  };
}

export default getComponents;
