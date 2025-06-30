import FabricCard from "./FabricCard";
import chiffonImg from "../../images/sewing.jpg";

export default function ProjectsDetailSingle() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <FabricCard
        imageSrc={chiffonImg}
        name="Chiffon Fabric"
        description="Lightweight, sheer, and perfect for elegant designs."
        ctaLink="/fabrics/chiffon"
      />
    </section>
  );
}
