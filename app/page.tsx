'use client'

import { useSelector } from "react-redux";

import type { ThemeState } from "./features/theme/themeSlice";

export default function Home() {
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  return (
    <div 
      className={`
      w-full flex justify-center transition duration-150
      ${theme ? 'bg-[#121212]' : 'bg-[#F5F5F5]'}  
    `}>
      <div 
        className={`
          max-w-[1150px] w-full h-[100vh] transition duration-150 shadow-2xl
          ${theme ? 'bg-[#282828] text-white' : 'bg-white'}
        `}> 
        
      </div>
    </div>
  );
}
