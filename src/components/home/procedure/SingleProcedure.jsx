import Image from "next/image";

const SingleProcedure = ({
  number,
  src,
  alt,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={` max-w-3/5 flex flex-col items-center justify-center    ${className}`}
    >
      <div className="relative w-[200px] h-[200px] transition-transform duration-300 hover:translate-y-5">
        {/* Badge */}
        <div className="absolute top-4 left-2 bg-green text-white font-bold text-sm w-10 h-10 flex items-center justify-center rounded-full  outline-3 outline-emerald-50 shadow-2xl z-10">
          {number}
        </div>

        {/* Circular Image with Green Border */}
        <div className="w-full h-full rounded-full border-r-[10px] border-b-[6px] border-green overflow-hidden ">
          <Image src={src} alt={alt} className="w-full h-full object-cover " />
        </div>
      </div>
      <h2 className="text-2xl  w-full font-semibold pt-8">{title}</h2>
      <p className="text-gray-700 w-full   mt-2">{description} </p>{" "}
    </div>
  );
};

export default SingleProcedure;
