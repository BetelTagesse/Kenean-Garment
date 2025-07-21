import SingleProcedure from "./SingleProcedure";
import First from "@/images/designer.jpg";
import Second from "@/images/image2.jpg";
import Third from "@/images/sewing.jpg";
import Fourth from "@/images/ready.jpg";

const ProcedureList = () => {
  return (
    <div className="grid sm:grid-cols-2 mt-20 lg:grid-cols-4 gap-6 w-full lg:w-10/12 mx-auto justify-items-center">
      <SingleProcedure
        number={1}
        src={First}
        alt="Person working with fabric swatches"
        title="Concept & Fabrication"
        description="We start by developing high-quality textiles tailored to your needs."
        className="lg:relative lg:top-[70px]"
      />

      <SingleProcedure
        number={2}
        src={Second}
        alt="Technician inspecting fabric quality"
        title="Custom Fabric Printing"
        description="Using advanced printers, we deliver precision prints on all materials."
      />

      <SingleProcedure
        number={3}
        src={Third}
        alt="Team preparing garments"
        title="Production Preparation"
        description="Patterns are finalized and fabrics cut, ready for final assembly."
        className="lg:relative lg:top-[70px]"
      />

      <SingleProcedure
        number={4}
        src={Fourth}
        alt="Finished garments ready for shipping"
        title="Finishing & Delivery"
        description="Each item is quality-checked, packed, and shipped with care."
      />
    </div>
  );
};

export default ProcedureList;
