'use client'

import type { ThemeState } from "../features/theme/themeSlice" //Type

import { useDispatch, UseDispatch, useSelector } from "react-redux"
import { turnDarkMode, turnLightMode } from "../features/theme/themeSlice"
import Image from "next/image"
import Link from "next/link"

import LogoForLightTheme from '@/public/multify-high-resolution-logo-transparent.png' 
import ThemeButton from "./ThemeButton"

export default function SideNav() {
  const dispatch = useDispatch()
  const resBool = useSelector((state: { theme: ThemeState }) => state.theme.value)

  return (
    <nav className="h-[100vh] w-full min-w-[250px] lg:min-w-[300px] lg:max-w-[350px] z-50 border-[#4A596D] border-8 hidden lg:block sticky top-0 rounded-r-lg hover:shadow-2xl transition duration-150">
      {/* Logo Section // CHANGE THE LOGO AS SOON AS POSIBLE */}
      <div className="flex flex-col items-center w-full h-[200px] p-2">
        <Link href='/'>
          <Image 
            alt="Logo"
            src={LogoForLightTheme}
            className="w-full"
          />
        </Link>

        <div className="absolute top-[150px] h-[2px] w-[250px]  bg-[#4A596D] rounded-lg" />
        <div className="absolute top-[170px] h-[2px] w-[200px]  bg-[#4A596D] rounded-lg " />
      </div>

      {/* Account Section Not Working for now */}
      <div className="flex justify-center  w-full h-[225px] border-black border-4">
        Profile Stuff

        <div className="absolute top-[447px] h-[2px] w-[200px]  bg-[#4A596D] rounded-lg " />
      </div>


      <div className="absolute h-[50px] w-[50px] border-4 right-0 bottom-0">
        <div className="flex justify-center items-center w-full h-full">
          <ThemeButton />
        </div>
      </div>
    </nav>
  )
}
  