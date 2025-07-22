import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSackDollar,
  faBuildingColumns,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

import FirstPart from "./FirstPart";
import Image from "next/image";
import designer from "../../../images/sewing.jpg";

const WholePart = () => {
  return (
    <div className="w-full mt-20">
      <div className="w-4/5 mx-auto">
        <p className="text-green text-5xl font-bold">CHOOSE</p>
        <h2 className="text-5xl py-5">
          Why People <span className="text-green font-bold">Choose Us</span>
        </h2>
        <div className="flex flex-col  md:flex-row justify-between">
          <div className="lg:p-2 md:w-1/2 sm:w-full">
            <FirstPart
              MyIcon={({ className }) => (
                <FontAwesomeIcon icon={faSackDollar} className={className} />
              )}
              heading="Affordable Pricing"
              description="Our solutions are competitively priced to suit every business budget."
            />
            <FirstPart
              MyIcon={({ className }) => (
                <FontAwesomeIcon
                  icon={faBuildingColumns}
                  className={className}
                />
              )}
              heading="Modern Infrastructure"
              description="We use top-tier infrastructure and automation to deliver consistent quality."
            />
            <FirstPart
              MyIcon={({ className }) => (
                <FontAwesomeIcon icon={faHeadset} className={className} />
              )}
              heading="24/7 Customer Support"
              description="Our team is always available to assist and resolve your inquiries."
            />
          </div>

          <Image
            src={designer}
            alt="Garment worker"
            className="rounded-4xl opacity-90 p-3 py-5 object-cover hidden md:block md:h-[460px] md:w-1/2   "
          />
        </div>
      </div>
    </div>
  );
};

export default WholePart;
