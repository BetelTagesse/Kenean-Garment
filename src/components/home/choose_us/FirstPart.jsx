import { Icon } from "lucide-react";

const FirstPart = ({ MyIcon, heading, description }) => {
  return (
    <div className="flex  gap-5  my-5 ">
      <MyIcon className="w-20 h-20  bg-gray-100 p-3 rounded-full text-green mb-10 " />

      <div className="flex flex-col justify-center rounded-2xl bg-gray-100 p-3  ">
        <h2 className="font-semibold text-2xl">{heading}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FirstPart;
