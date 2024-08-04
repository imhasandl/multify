'use client'

import { useState } from "react"

import { UseSelector, useDispatch, useSelector } from "react-redux"
import { turnDarkMode, turnLightMode } from "../app/features/theme/themeSlice"

import Image from "next/image"

import DarkModeImage from '@/public/darkmodeicon.svg'
import LightModeImage from '@/public/lightmodeicon.svg'

import type { ThemeState } from "../app/features/theme/themeSlice"

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
        <Image 
          alt="dark theme button"
          src={DarkModeImage}
        />
      </button>

      <button onClick={turnLightTheme} className={`${theme ? "block" : 'hidden'}`}>
        <Image 
          alt="dark theme button"
          src={LightModeImage}
        /> 
      </button>
    </>
  )
}
