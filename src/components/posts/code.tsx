const inlineCode: React.FC = ({ children }) => (
  <code className="bg-gray-800 rounded-sm p-0.5">{children}</code>
);

const div: React.FC<{ className?: string }> = ({ children, className }) => {
  if (className == "remark-highlight") {
    return <div className="remark-highlight my-4">{children}</div>;
  }
  return <div>{children}</div>;
};

const pre: React.FC<{ className?: string }> = ({ children, className }) => (
  <pre className={`${className} p-2 rounded-md overflow-x-auto whitespace-pre`}>
    {children}
  </pre>
);

const blockquoteStyles =
  "bg-gray-800 text-center rounded-sm px-4 py-2 my-2 before:block before:text-left before:text-xl before:content-['“'] after:block after:text-right after:text-xl after:content-['”']";

const blockquote: React.FC = ({ children }) => (
  <blockquote className={blockquoteStyles}>{children}</blockquote>
);

export { inlineCode, div, pre, blockquote };
