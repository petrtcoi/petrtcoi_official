import Link from "next/link"
import EmailIcon from "./components/EmailIcon"
import LinkedinIcon from "./components/LinkedinIcon"
import TelegramIcon from "./components/TelegramIcon"
import GithubIcon from "./components/GithubIcon"

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="mt-7"
    >
      <div className="mb-2 text-slate-500 dark:text-slate-400 font-light dark:font-thin">
        contact me
      </div>
      <div className=" flex flex-row gap-6 text-slate-700 dark:text-slate-100 font-light dark:font-thin">
        <Link
          href="http://t.me/thepetrtcoi"
          target={"_blank"}
          rel="noreferrer"
          className="group"
        >
          <TelegramIcon />
        </Link>

        <Link
          href="https://www.linkedin.com/in/petrtcoi/"
          target={"_blank"}
          rel="noreferrer"
          className="group"
        >
          <LinkedinIcon />
        </Link>

        <Link
          href="https://github.com/petrtcoi"
          target={"_blank"}
          rel="noreferrer"
          className="group"
        >
          <GithubIcon />
        </Link>

        <Link
          href="mailto:petrtcoi@gmail.com"
          target={"_blank"}
          className="group"
        >
          <EmailIcon />
        </Link>
      </div>
    </div>
  )
}
