import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '@/app/features/theme/todoSlice'

import categoryData from '@/data/categoryTodoData'
import type { ThemeState } from '@/types'
import type { TodoSlicerProps } from '@/types'

import redBin from '@/public/red-bin.png'
import pencilEdit from '@/public/pebcil-edit.png'


export default function Todo() {
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)
  const todos = useSelector((state: { todo: TodoSlicerProps }) => state.todo)
  const dispatch = useDispatch()

  const [title, setTitle] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [todoText, setTodoText] = useState<string>('')

  function handleTodoCreation() {
    const newTodo = { title, category, todoText }

    if (title === '' && category === '' && todoText === '') {
      alert('Please fill all fields.')
      return
    } else {
      dispatch(createTodo(newTodo))
      setTitle('')
      setCategory('')
      setTodoText('')
    }
  }

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-auto flex flex-col mt-5">
        <div className="flex flex-row flex-wrap items-center m-4 gap-4">
          <div className="flex flex-col items-center">
            <input
              className="py-3 px-4 border-4 border-cyan-500 focus:border-blue-500 rounded-lg hover:shadow-md cursor-pointer"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title..."
              type="text"
            />
          </div>

          <div className="flex flex-col items-center">
            <select
              className="py-3 px-3 border-4 border-cyan-500 rounded-lg focus-within:border-blue-500 text-opacity-50 hover:shadow-md cursor-pointer"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              {categoryData.map((category) => (
                <option value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-row flex-wrap m-4">
          <div className="flex-1 max-w-[400px]">
            <label className="block mb-2 text-sm font-medium">Your todo text</label>
            <textarea
              id="message"
              className="block p-2.5 h-[175px] w-full text-sm border-4 border-cyan-500 rounded-lg hover:shadow-md cursor-pointer"
              onChange={(e) => setTodoText(e.target.value)}
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>

          <button className="ml-auto mb-auto" onClick={handleTodoCreation}>
            Create Todo
          </button>
        </div>

        <div className="flex border-4 border-blue-500 rounded-md m-2">
          <div className="flex justify-center items-start h-auto flex-row flex-wrap gap-4">
            {todos.map((todo: { title: string; category: string; todoText: string }, index: number) => (
               <div className="flex flex-col m-4 h-[300px] w-[300px] rounded-md bg-slate-100" key={index}>
						<div className="flex p-4">
							{todo.title}
						</div>
						
						<div className='flex flex-1 rounded-lg bg-gray-200'>
							{todo.todoText}
						</div>

						<div className='flex flex-row justify-start items-center justify-between'>
							<p className='text-sm opacity-50 pl-2'>{new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>

							<div className='flex flex-row justify-between p-3'>
								<img className='h-[25px] w-[25px]' src={pencilEdit.src} alt='editIcon'/>
								<img className='h-[25px] w-[25px]' src={redBin.src} alt='trashIcon'/>
							</div>
						</div>
               </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}