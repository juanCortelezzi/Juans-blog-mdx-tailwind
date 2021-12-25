const ul: React.FC = ({ children }) => (
  <ul className="list-disc list-outside pl-6 my-4">{children}</ul>
);

const ol: React.FC = ({ children }) => (
  <ol className="list-decimal list-outside pl-6 my-4">{children}</ol>
);

export { ul, ol };
