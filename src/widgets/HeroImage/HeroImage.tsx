"use client"

import { useState, useEffect, useReducer } from "react"
import Image from "next/image"
import { useAtom } from "jotai"

import { darkModeAtom } from "@features/dark_mode"

import Bulb from "./components/Bulb"
import MainImage from "./assets/main_icon.png"

/** Reducer */
type ImageAction = {
  type: "DarkModeHide" | "DarkModeShow" | "LightModeShow"
}
type ImageState = {
  illuminated: boolean
  showBlub: boolean
}
function imageReducer(state: ImageState, action: ImageAction): ImageState {
  const { type } = action
  switch (type) {
    case "DarkModeHide":
      return { illuminated: false, showBlub: false }
    case "DarkModeShow":
      return { illuminated: true, showBlub: true }
    case "LightModeShow":
      return { illuminated: true, showBlub: false }
    default:
      return state
  }
}

export default function HeroImage() {
  const [darkMode] = useAtom(darkModeAtom)

  const [{ illuminated, showBlub }, dispatch] = useReducer(imageReducer, {
    illuminated: false,
    showBlub: false,
  })

  useEffect(() => {
    if (!darkMode) {
      dispatch({ type: "LightModeShow" })
      return
    }
    dispatch({ type: "DarkModeHide" })
    const timer = setTimeout(() => {
      dispatch({ type: "DarkModeShow" })
    }, 1000)

    return () => clearTimeout(timer)
  }, [darkMode])

  return (
    <div className={"px-10 pt-0 md:pt-20 mx-auto relative"}>
      <Image
        src={MainImage}
        alt="Petr Tcoi skills"
        loading="eager"
        width={500}
        height={500}
        sizes="(max-width: 768px) 100vw, 400px"
        className={illuminated ? "brightness-100" : "brightness-[25%]"}
      />
      {showBlub && <Bulb />}
    </div>
  )
}
