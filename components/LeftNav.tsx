'use client'

import type { ThemeState } from "../app/features/theme/themeSlice" //Type

import { useDispatch, useSelector } from "react-redux"

import Image from "next/image"
import Link from "next/link"

import LogoForLightTheme from '@/public/multify-high-resolution-logo-transparent.png' 
import LogoForDarkTheme from '@/public/multify-high-resolution-logo-white-transparent.png'
import arrowRight from '@/public/arrow-right.svg'

import ThemeButton from "./ThemeButton"

const navButtonsOptons = [
  { id: '1', name: 'News', route: "/" },
  { id: '2', name: 'Weather application', route: "/weather" },
  { id: '3', name: 'Curenncy convertor', route: "/converter" },
  { id: '4', name: 'Todo/Planing app', route: "/todos" },
  { id: '5', name: 'Something Else', route: "/something" }
]

export default function SideNav() {
  const dispatch = useDispatch()
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  return (
    <nav 
      className={`h-[100vh] w-full min-w-[250px] lg:min-w-[300px] lg:max-w-[350px] z-50 hidden lg:block sticky top-0 shadow-2xl transition duration-150
      ${theme ? 'bg-[#282828] text-white' : 'bg-white'}  
    `} > 
      {/* Logo Section // CHANGE THE LOGO AS SOON AS POSIBLe */}
      <div className="flex flex-col items-center w-full h-[200px] p-2">
        <Link href='/'>
          <Image 
            alt="Logo"
            src={LogoForLightTheme}
            className={`${theme ? "hidden" : 'block'}`}
          />

          <Image 
            alt="Logo"
            src={LogoForDarkTheme}
            className={`${theme ? "block" : 'hidden'}`}
          />
        </Link>
        <div className={`absolute top-[150px] h-[2px] w-[250px] rounded-lg ${theme ? 'bg-white' : 'bg-[#4A596D]'}`} />
        <div className={`absolute top-[170px] h-[2px] w-[200px] rounded-lg ${theme ? 'bg-white' : 'bg-[#4A596D]'}`} />
      </div>

      {/* Navigation Buttons  */}
      <div className="flex flex-col m-3 gap-2">
        {navButtonsOptons.map(option => (
          <Link href={option.route}>
          <div className={`flex justify-center items-center rounded-md hover:shadow-md transition-all transform hover:scale-110
            ${theme ? 'bg-gradient-to-r from-[#282828] to-[#4A596D]' : 'bg-gradient-to-r from-white to-[#4A596D]'}`}>
            <button key={option.id} className="flex w-full py-2">
              <span className="font-sans ml-5">{option.name}</span>
            </button>
            <Image className="w-[25px] h-[25px]" src={arrowRight} alt="arrowRight" />
          </div>
        </Link>
        ))}
      </div>

      {/* Theme Button Section  */}
      <div className="absolute h-[55px] w-[55px] right-0 bottom-0 m-3 ">
        <div className="flex justify-center items-center w-full h-full rounded-full hover:drop-shadow-md">
          <ThemeButton />
        </div>
      </div>
    </nav>
  )
}
  