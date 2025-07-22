const FirstPart = ({ MyIcon, heading, description }) => {
  return (
    <div className="flex gap-5 items-center my-5 group cursor-pointer">
      {/* Circular background with centered icon */}
      <div className="rounded-full bg-gray-100 w-24 h-24 flex items-center justify-center group-hover:bg-green transition duration-300">
        <MyIcon className="text-green text-3xl group-hover:text-white transition duration-300" />
      </div>

      {/* Text content */}
      <div className="choose-us w-[500px] h-32 flex flex-col justify-center rounded-2xl bg-gray-100 p-5 group-hover:bg-green group-hover:text-white transition duration-300">
        <h2 className="font-semibold text-2xl">{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FirstPart;
