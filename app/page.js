import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { SlidingImage } from "@/components/home/sliding_image";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <SlidingImage /> page
      </div>
      {/* <div>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="text-green-500 text-3xl"
        />
      </div> */}
    </>
  );
}
