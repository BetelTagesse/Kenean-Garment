import { Users2 } from "lucide-react";
import FirstPart from "./FirstPart";
import Image from "next/image";
import designer from "../../../images/sewing.jpg";

const WholePart = () => {
  return (
    <div className="  w-full">
      <div className="w-4/5 mx-auto ">
        <p className="text-green text-5xl font-bold ">CHOOSE</p>
        <h2 className="text-5xl py-5">
          Why People <span className="text-green font-bold">Choose Us</span>
        </h2>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="p-2 md:w-full ">
            <FirstPart
              MyIcon={Users2}
              heading="Low Price Of Cost"
              description="There are many variations of passages but the majority have suffered alteration"
            />
            <FirstPart
              MyIcon={Users2}
              heading="Latest Technology Use"
              description="There are many variations of passages but the majority have suffered alteration"
            />
            <FirstPart
              MyIcon={Users2}
              heading="24/7 Service Support"
              description="There are many variations of passages but the majority have suffered alteration"
            />
          </div>
          <Image
            src={designer}
            alt="image of a garment worker"
            className="rounded-4xl opacity-90 p-3 py-5 object-cover hidden md:block h-full w-full md:w-full md:h-full "
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default WholePart;
