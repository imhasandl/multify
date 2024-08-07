'use client'

import { useSelector } from "react-redux"
import { ThemeState } from "../features/theme/themeSlice"

export default function page() {
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  return (
    <div className={`${theme ? 'bg-[#121212]' : 'bg-[#F5F5F5]'} w-full flex justify-center transition duration-150`}>
      <div className={`${theme ? 'bg-[#282828] text-white' : 'bg-white'} max-w-[1150px] w-full transition duration-150 shadow-2xl z-1`}>
        <div className="w-full flex flex-col  h-[100vh]">
          {/* Todo / Diary / Calender */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-evenly mx-4 my-6">
              <button className="text-2xl p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Todo</button>
              <button className="text-2xl p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Diary</button>
              <button className="text-2xl p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Calendar</button>
            </div>

            <div className="h-[4px] mx-8 bg-black bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
          </div>


        </div>
      </div>
    </div>
  )
}
