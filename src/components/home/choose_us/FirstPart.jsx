import { Icon } from "lucide-react";

const FirstPart = ({ MyIcon, heading, description }) => {
  return (
    <div className="flex   gap-5 items-center my-5 group cursor-pointer ">
      <MyIcon className=" choose-us w-20 h-20      bg-gray-100   p-6 rounded-full text-green group-hover:bg-green group-hover:text-white " />

      <div className="choose-us flex flex-col justify-center rounded-2xl bg-gray-100 p-5  group-hover:bg-green group-hover:text-white ">
        <h2 className="font-semibold text-2xl ">{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FirstPart;
