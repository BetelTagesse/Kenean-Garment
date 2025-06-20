import React from "react";
import SingleProject from "./SingleProject.jsx";

const Projects = () => {
  return (
    <div>
      <SingleProject src={First} alt="Chiffon Fabric" name="chiffon fabric" />
      <SingleProject src={Second} alt="cotton fabric" name="cotton fabric" />
      <SingleProject src={Third} alt="crepe fabric" name="crepe fabric" />
      <SingleProject src={Fourth} alt="Denim fabric" name="Denim fabric" />
    </div>
  );
};

export default Projects;
