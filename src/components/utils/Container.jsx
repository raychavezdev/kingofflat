const Container = ({ children, className }) => {
  return <div className={`w-5/6 m-auto md:w-4/6 ${className}`}>{children}</div>;
};

export default Container;
