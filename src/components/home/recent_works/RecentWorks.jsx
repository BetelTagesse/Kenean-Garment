import FirstSection from "./FirstSection";
import SingleWork from "./SingleWork";
import First from "../../../images/sewing.jpg";
import Second from "../../../images/sewing.jpg";
import Third from "../../../images/sewing.jpg";
import Fourth from "../../../images/sewing.jpg";

const RecentWorks = () => {
  return (
    <div className="bg-purple w-full mt-40 py-15">
      <FirstSection />
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2  lg:grid-cols-4 gap-10 w-11/12 mt-25 mx-auto pb-20">
        <SingleWork src={First} alt="Chiffon Fabric" name="chiffon fabric" />
        <SingleWork src={Second} alt="cotton fabric" name="cotton fabric" />
        <SingleWork src={Third} alt="crepe fabric" name="crepe fabric" />
        <SingleWork src={Fourth} alt="Denim fabric" name="Denim fabric" />
      </div>
    </div>
  );
};

export default RecentWorks;
