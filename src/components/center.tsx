interface IProps {
  tail?: string;
}

const Center: React.FC<IProps> = ({ children, tail }) => {
  return (
    <div className={`flex flex-col justify-center items-center ${tail}`}>
      {children}
    </div>
  );
};

export default Center;
