export const Button = ({ children, className }) => {
  return (
    <button
      className={` bg-[#061539] text-white py-2 px-4 hover:bg-blue-950 rounded-full ${className}`}
    >
      {children}
    </button>
  );
};
