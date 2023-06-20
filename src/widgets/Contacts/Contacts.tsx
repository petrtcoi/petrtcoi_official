import Link from "next/link"
import EmailIcon from "./components/EmailIcon"
import LinkedinIcon from "./components/LinkedinIcon"
import TelegramIcon from "./components/TelegramIcon"

export default function Contacts() {
  return (
    <div className="mt-5 flex flex-col gap-1 text-slate-700 dark:text-slate-100 font-light dark:font-thin">
      <div className="flex flex-row gap-4 items-center group">
        {/* <div> */}
        <TelegramIcon />
        {/* </div> */}
        <Link
          href="http://t.me/thepetrtcoi"
          target={"_blank"}
          rel="noreferrer"
          className="group"
        >
          @thepetrtcoi
        </Link>
      </div>

      <div className="flex flex-row gap-4 items-center group">
        <LinkedinIcon />
        <Link
          href="https://www.linkedin.com/in/petrtcoi/"
          target={"_blank"}
          rel="noreferrer"
          className="peer"
        >
          /petrtcoi
        </Link>
      </div>
      <div className="flex flex-row gap-4 items-center group">
        <div className="mt-1">
          <EmailIcon />
        </div>
        <Link
          href="mailto:petrtcoi@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          petrtcoi@gmail.com
        </Link>
      </div>
    </div>
  )
}
