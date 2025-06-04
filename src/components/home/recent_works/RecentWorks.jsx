import FirstSection from "./FirstSection";
import SingleWork from "./SingleWork";
import First from "../../../images/sewing.jpg";
import Second from "../../../images/sewing.jpg";
import Third from "../../../images/sewing.jpg";
import Fourth from "../../../images/sewing.jpg";

const RecentWorks = () => {
  return (
    <div className="bg-purple h-fit w-full my-30  ">
      <FirstSection />
      <div className=" flex  flex-col md:flex-1/2 lg:flex-row  gap-10 items-center md:justify-between  w-3/4  mt-[120px] mx-auto pb-20">
        <SingleWork src={First} alt="Chiffon Fabric" name="chiffon fabric" />
        <SingleWork src={Second} alt="cotton fabric" name="cotton fabric" />
        <SingleWork src={Third} alt="crepe fabric " name="crepe fabric" />
        <SingleWork src={Fourth} alt="Denim fabric" name="Denim fabric" />
      </div>
    </div>
  );
};

export default RecentWorks;
