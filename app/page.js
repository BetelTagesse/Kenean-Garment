import { SlidingImage } from "@/components/home/sliding_image.jsx";
import { Button } from "@/shared/button";

export default function Home() {
  return (
    <SlidingImage>
      <h2 className="text-3xl font-bold mb-4">We Are From - 2019</h2>
      <h2 className="text-2xl mb-6">Get Quality Fabric For Your Business</h2>
      <Button className="bg-green-500">LEARN MORE</Button>
    </SlidingImage>
  );
}
