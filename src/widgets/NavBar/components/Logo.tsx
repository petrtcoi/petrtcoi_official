import { Orbitron } from "next/font/google"

const orbitron = Orbitron({
  weight: "400",
  subsets: ["latin"],
})

export default function Logo(): JSX.Element {
  return (
    <div
      id="logo"
      className={`text-2xl font-bold text-gray-900 dark:text-white ${orbitron.className}`}
    >
      Petr Tcoi
    </div>
  )
}
