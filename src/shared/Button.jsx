export const Button = ({ children, className = "" }) => {
  return (
    <button className={` text-white px-6 py-2 rounded-full  ${className}`}>
      {children}
    </button>
  );
};
