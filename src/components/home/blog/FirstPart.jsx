import Slider from "../Slider";

const FirstPart = () => {
  return (
    <div className="relative top-10 p-6 mb-20 bg-background h-full w-full ">
      <p className="text-green text-center text-[16px] font-semibold">
        OUR BLOG
      </p>
      <h2 className="text-4xl text-black font-semibold text-center mt-4">
        Our Latest <span className="text-green">News</span>
      </h2>
      <Slider />
    </div>
  );
};

export default FirstPart;
