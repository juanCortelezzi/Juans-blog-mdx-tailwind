const table: React.FC = ({ children }) => (
  <table className="table-fixed w-full border-collapse tracking-wide my-4">
    {children}
  </table>
);

const tbody: React.FC = ({ children }) => (
  <tbody className="divide-y divide-bgray">{children}</tbody>
);

export { table, tbody };
