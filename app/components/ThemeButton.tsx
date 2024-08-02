'use client'

import { UseSelector, useDispatch, useSelector } from "react-redux"
import { turnDarkMode, turnLightMode } from "../features/theme/themeSlice"

import type { ThemeState } from "../features/theme/themeSlice"

export default function ThemeButton() {
   const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

   console.log(theme)

  return (
    <div>fd</div>
  )
}
