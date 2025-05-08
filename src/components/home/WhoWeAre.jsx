import Image from "next/image";
import designer from "../../images/designer.jpg";
import { Button } from "@/shared/Button";

export const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row w-10/12 mx-auto py-10 gap-10 items-stretch">
      {/* Image Container */}
      <div className="w-1/2 md:w-1/2 flex min-h-[600px]">
        <Image
          src={designer}
          alt="image of a garment worker"
          className="rounded-3xl opacity-90 p-3 object-cover h-full w-full"
        />
      </div>

      {/* Text Content */}
      <div className="w-1/2 md:w-1/2 flex flex-col justify-start px-3 py-10 max-w-xl">
        <p className="text-green-500 pb-4 font-bold">WHO WE ARE</p>
        <p className="text-gray-900 text-3xl md:text-4xl capitalize leading-snug">
          The Best Textile <span className="text-green-500">Company</span> In{" "}
          <br className="hidden md:block" />
          The Country.
        </p>

        <p className="pt-6 text-sm md:text-base">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>

        <p className="pt-6">Sed ut perspiciatis unde omnis</p>
        <p className="pt-6">At vero eos et accusamus et iusto</p>
        <p className="pt-6">Natus error sit voluptatem accusantium</p>

        <Button className="mt-13 bg-green-500 text-white font-semibold py-2 px-2 rounded-full hover:cursor-pointer">
          Learn More
        </Button>
      </div>
    </div>
  );
};
