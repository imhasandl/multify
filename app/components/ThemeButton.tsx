'use client'

import { useState } from "react"

import { UseSelector, useDispatch, useSelector } from "react-redux"
import { turnDarkMode, turnLightMode } from "../features/theme/themeSlice"

import type { ThemeState } from "../features/theme/themeSlice"

export default function ThemeButton() {

    const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)
    const dispatch = useDispatch()

    const turnDarkTheme = () => {
      dispatch(turnDarkMode())
    }

    const turnLightTheme = () => {
      dispatch(turnLightMode())
  }

  return (
    <>
      <button onClick={turnDarkTheme} className={`${theme ? "hidden" : 'block'}`}>
        Dark
      </button>

      <button onClick={turnLightTheme} className={`${theme ? "block" : 'hidden'}`}>
        Light
      </button>
    </>
  )
}
