import Image from "next/image"
import BulbImage from "./assets/bulb.png"

type Props = {
  hide: boolean
}

export default function Bulb({ hide = false }: Props) {
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
        hidden={hide}
      />
    </div>
  )
}
