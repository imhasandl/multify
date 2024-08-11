'use client'

import { useState } from "react"

import { useSelector } from "react-redux"

import type { ThemeState } from "@/types"

import Todo from "@/components/Todo"

export default function page() {
  const [todoSection, setTodoSection] = useState<boolean>(true)
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  return (
    <div className={`${theme ? 'bg-[#121212]' : 'bg-[#F5F5F5]'} w-full flex justify-center transition duration-150`}>
      <div className={`${theme ? 'bg-[#282828] text-white' : 'bg-white'} max-w-[1150px] w-full transition duration-150 shadow-2xl z-1`}>
        <div className="flex flex-col">
          <div className="flex flex-row justify-evenly mx-2 md:mx-4 my-4 md:my-6 text-md md:text-2xl">
            <button className="p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Todo</button>
            <button className="p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Diary</button>
            <button className="p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Calendar</button>
          </div>

          <div className="h-[4px] mx-8 bg-black bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
        </div>
        
        {todoSection && <Todo />}
      </div>
    </div>
  )
}
