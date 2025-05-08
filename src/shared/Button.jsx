export const Button = ({ children, className }) => {
  return (
    <button
      className={`bg-[#061539] text-white rounded-full hover:from-bg-blue-950 ${className}`}
    >
      {children}
    </button>
  );
};
