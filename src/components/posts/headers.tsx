const headerStyles = "text-4xl leading-loose";

const h1: React.FC = ({ children }) => (
  <h2 className={headerStyles}>{children}</h2>
);

const h2: React.FC = ({ children }) => (
  <h3 className={headerStyles}>{children}</h3>
);

const h3: React.FC = ({ children }) => (
  <h4 className={headerStyles}>{children}</h4>
);

const h4: React.FC = ({ children }) => (
  <h5 className={headerStyles}>{children}</h5>
);

const h5: React.FC = ({ children }) => (
  <h6 className={headerStyles}>{children}</h6>
);

const h6: React.FC = ({ children }) => (
  <p className={headerStyles}>{children}</p>
);

export { h1, h2, h3, h4, h5, h6 };
