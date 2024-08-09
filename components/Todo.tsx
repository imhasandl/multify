'use client'

import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UseDispatch } from 'react-redux'
import { createTodo } from '@/app/features/theme/todoSlice'

import categoryData from '@/data/categoryTodoData'
import type { ThemeState } from '@/app/features/theme/themeSlice'
import type { TodoSlicerProps } from '@/app/features/theme/todoSlice'

export default function Todo() {
	const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)
	const todos = useSelector((state: { todo: TodoSlicerProps }) => state.todo)
	const dispatch = useDispatch()

	const [title, setTitle] = useState<string>('')
	const [category, setCategory] = useState<string>('')
	const [todoText, setTodoText] = useState<string>('')
	
	function hadnleTodoCreation(){
		const newTodo = {
			title: title,
			category: category,
    		todoText: todoText,
		}

		dispatch(createTodo(newTodo))
	}

	console.log(todos)


  return (
	<div className="w-full flex flex-col">
		{/* Input Section / Todo List */}
		<div className="w-full h-auto flex flex-col mt-5">
			<div className="flex flex-row flex-wrap items-center m-4 gap-4">
				<div className="flex flex-col items-center">
					<input className="py-3 px-4 border-4 border-cyan-500  focus:border-blue-500 rounded-lg  hover:shadow-md cursor-pointer" onChange={(e) => setTitle(e.target.value)} placeholder="Title..." type="text"/>
				</div>

				<div className="flex flex-col items-center">
					<select className="py-3 px-3 border-4 border-cyan-500 rounded-lg focus-within:border-blue-500 text-opacity-50 hover:shadow-md cursor-pointer" onChange={(e) => setCategory(e.target.value)}>
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
						className="block p-2.5 h-[175px] w-full text-sm border-4 border-cyan-500 rounded-lg hover:shadow-md cursor-pointer" 
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
				
			</div>
		</div>		
 	</div>
  )
}
