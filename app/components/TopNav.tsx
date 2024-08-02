'use client'

import { useSelector } from "react-redux"

import type { ThemeState } from "../features/theme/themeSlice"

import ThemeButton from "./ThemeButton"

export default function TopNav() {
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  return (
    <nav 
      className={`flex justify-center items-center lg:hidden w-full h-[100px] sticky top-0 z-50 duration-150 shadow-lg rounded-b-lg
         ${theme ? "bg-[#282828] text-white" : 'bg-white'}
      `}>
      <div className="absolute right-2 w-[55px] h-[55px]">
        <ThemeButton />
      </div>
    </nav>
  )
}
