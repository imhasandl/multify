'use client'

import { useSelector } from "react-redux"

import type { ThemeState } from "../app/features/theme/themeSlice"

import ThemeButton from "./ThemeButton"

export default function TopNav() {
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  return (
    <nav 
      className={`flex lg:hidden items-center w-full min-h-[85px] sticky top-0 z-auto duration-150 shadow-lg
         ${theme ? "bg-[#282828] text-white" : 'bg-white'}
      `}>
      <div className="absolute right-2 w-[55px] h-[55px]">
        <ThemeButton />
      </div>
    </nav>
  )
}
