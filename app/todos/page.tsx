'use client'

import { useSelector } from "react-redux"
import { ThemeState } from "../features/theme/themeSlice"
import Todo from "@/components/Todo"
import { useState } from "react"

export default function page() {
  const [todoSection, setTodoSection] = useState<boolean>(true)
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)

  return (
    <div className={`${theme ? 'bg-[#121212]' : 'bg-[#F5F5F5]'} w-full flex justify-center transition duration-150`}>
      <div className={`${theme ? 'bg-[#282828] text-white' : 'bg-white'} max-w-[1150px] w-full transition duration-150 shadow-2xl z-1`}>
        {todoSection && <Todo />}

      </div>
    </div>
  )
}
