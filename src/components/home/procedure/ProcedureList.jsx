import SingleProcedure from "./SingleProcedure";
import First from "../../../images/sewing.jpg";
import Second from "../../../images/sewing.jpg";
import Third from "../../../images/sewing.jpg";
import Fourth from "../../../images/sewing.jpg";

const ProcedureList = () => {
  return (
    <div className="grid  sm:grid-cols-2 mt-20 lg:grid-cols-4 gap-6 w-full lg:w-10/12 mx-auto justify-items-center">
      <SingleProcedure
        number={1}
        src={First}
        alt="Person holding a thread"
        title="Fabric Development"
        description="There are many variations of majority have suffered."
        className="lg:relative lg:top-[70px]"
      />

      <SingleProcedure
        number={2}
        src={Second}
        alt="Person holding a thread"
        title="Fabric Printing"
        description="There are many variations of majority have suffered."
      />

      <SingleProcedure
        number={3}
        src={Third}
        alt="Person holding a thread"
        title="Prepare production"
        description="There are many variations of majority have suffered."
        className="lg:relative lg:top-[70px]"
      />

      <SingleProcedure
        number={4}
        src={Fourth}
        alt="Person holding a thread"
        title="Ready for Sale"
        description="There are many variations of majority have suffered."
      />
    </div>
  );
};

export default ProcedureList;
