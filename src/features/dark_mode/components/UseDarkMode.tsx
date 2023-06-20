"use client"

import { useAtom } from "jotai"
import { darkModeAtom } from "../store/darkmode.store"
import { useEffect } from "react"

export function UseDarkMode(): JSX.Element {
  const [darkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    if (darkMode) {
      document.getElementsByTagName("html")[0].classList.add("dark")
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark")
    }
  }, [darkMode])

  return <> </>
}
