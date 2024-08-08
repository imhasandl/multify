'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'

import categoryData from '@/data/categoryTodoData'
import type { ThemeState } from '@/app/features/theme/themeSlice'

export default function Todo() {
	const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)
	const [title, setTitle] = useState<string>('')
	const [category, setCategory] = useState<string>('')
	const [todoText, setTodoText] = useState<string>('')
	
	function hadnleTodoCreation(){
		console.log(title)
		console.log(category)
		console.log(todoText)

		setTitle('')
		setCategory('')
		setTodoText('')
	}


  return (
	<div className="w-full flex flex-col">
		{/* Todo / Diary / Calender */}
		<div className="flex flex-col">
			<div className="flex flex-row justify-evenly mx-2 md:mx-4 my-4 md:my-6 text-md md:text-2xl">
				<button className="p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Todo</button>
				<button className="p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Diary</button>
				<button className="p-3 w-[175px] rounded-lg hover:bg-gray-300 transition hover:text-black">Calendar</button>
			</div>

			<div className="h-[4px] mx-8 bg-black bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg" />
		</div>

		{/* Input Section / Todo List */}
		<div className="w-full h-auto flex flex-col mt-5">
			<div className="flex flex-row flex-wrap items-center m-4 gap-4">
				<div className="flex flex-col items-center">
					<input className="py-3 px-4 border-4 border-cyan-500  focus:border-blue-500 rounded-lg  hover:shadow-md cursor-pointer" onChange={(e) => setTitle(e.target.value)} placeholder="Title..." type="text"/>
				</div>

				<div className="flex flex-col items-center">
					<select className="py-3 px-3 border-4 border-cyan-500 rounded-lg focus-within:border-blue-500 text-opacity-50 hover:shadow-md cursor-pointer">
						<option value="">Category</option>
						{categoryData.map(category => (
							<option value={category}>{category}</option>
						))}
					</select>
				</div>
			</div>

			<div className='flex flex-row flex-wrap m-4'>
				<div className='flex-1 max-w-[400px]'>
					<label className="block mb-2 text-sm font-medium">Your todo text</label>
					<textarea 
						id="message"
						className="block p-2.5 w-full text-sm border-4 border-cyan-500 rounded-lg hover:shadow-md cursor-pointer" 
						onChange={(e) => setTodoText(e.target.value)}
						placeholder="Write your thoughts here...">
					</textarea>
				</div>
				
				<button className='ml-auto mb-auto' onClick={hadnleTodoCreation}>
					Create Todo
				</button>
			</div>	
			
			{/* Result */}
			<div className='flex flex-row flex-wrap w-full m-5 shadow-inner'>
				{}
			</div>
		</div>		
 	</div>
  )
}
