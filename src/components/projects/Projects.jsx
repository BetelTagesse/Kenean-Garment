import Image from "next/image";

import First from "../../images/sewing.jpg";
import Second from "../../images/sewing.jpg";
import Third from "../../images/sewing.jpg";
import Fourth from "../../images/sewing.jpg";
import Fifth from "../../images/sewing.jpg";
import Sixth from "../../images/sewing.jpg";

import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <section className="px-6 py-12 max-w-7xl  mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <SingleProject src={First} alt="Chiffon Fabric" name="chiffon fabric" />
        <SingleProject src={Second} alt="cotton fabric" name="cotton fabric" />
        <SingleProject src={Third} alt="crepe fabric" name="crepe fabric" />
        <SingleProject src={Fourth} alt="Denim fabric" name="Denim fabric" />
        <SingleProject
          src={Fifth}
          alt="Georgette fabric"
          name="Georgette fabric"
        />
        <SingleProject src={Sixth} alt="Linen fabric" name="Linen fabric" />
      </div>
    </section>
  );
};

export default Projects;
