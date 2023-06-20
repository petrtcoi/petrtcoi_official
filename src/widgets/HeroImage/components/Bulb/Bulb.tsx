import Image from "next/image"
import BulbImage from "./assets/bulb.png"

export default function Bulb() {
  return (
    <div className="relative">
      <Image
        src={BulbImage}
        alt="Bulb"
        loading="eager"
        width={40}
        height={53}
        className="absolute bottom-10 left-0"
        priority
      />
    </div>
  )
}
