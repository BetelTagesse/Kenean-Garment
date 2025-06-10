import Slider from "../home/Slider";

const FirstPart = () => {
  return (
    <div className="relative top-10 p-6 mb-20  h-full w-full ">
      <p className="text-green text-center text-[16px] font-semibold">
        OUR Team
      </p>
      <h2 className="text-4xl text-black font-semibold text-center mt-4">
        Meet With Our <span className="text-green">Experts</span>
      </h2>
      <Slider />
    </div>
  );
};

export default FirstPart;
