import Image from "next/image";
import logo from "../../images/cola.png";
import { Button } from "@/shared/Button";

export const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around w-11/12 mx-auto py-10 items-center gap-10">
      <Image
        src={logo}
        alt="image of a garment worker"
        className="w-full md:w-1/2 rounded-3xl opacity-90 p-3 z-30 object-cover"
      />

      <div className="flex flex-col justify-evenly px-3 w-full md:w-1/2 py-3">
        <div className="flex flex-col items-start">
          <p className="text-green-500 pb-2 font-bold">WHO WE ARE</p>
          <p className="text-gray-900 text-3xl md:text-4xl capitalize leading-snug">
            The Best Textile <span className="text-green-500">Company</span> In{" "}
            <br className="hidden md:block" />
            The Country.
          </p>

          <p className="pt-6 text-sm md:text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>

          <p className="pt-6">Sed ut perspiciatis unde omnis</p>
          <p className="pt-4">At vero eos et accusamus et iusto</p>
          <p className="pt-4">Natus error sit voluptatem accusantium</p>
        </div>

        <Button className="mt-6 bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:cursor-pointer">
          Learn More
        </Button>
      </div>
    </div>
  );
};
