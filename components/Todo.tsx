import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo } from '@/app/features/theme/todoSlice'

import categoryData from '@/data/categoryTodoData'
import type { ThemeState, TodoSlicerProps } from '@/types'

import redBin from '@/public/red-bin.png'
import pencilEdit from '@/public/pebcil-edit.png'


export default function Todo() {
  const theme = useSelector((state: { theme: ThemeState }) => state.theme.value)
  const todos = useSelector((state: { todo: any }) => state.todo)
  const dispatch = useDispatch()

  const [title, setTitle] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [todoText, setTodoText] = useState<string>('')
  const [checkbox, setCheckbox] = useState<boolean | undefined>(false)

  function handleTodoCreation() {
    const newTodo = {
      title, 
      category, 
      todoText 
    }
  
    
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

  function handleDeleteTodo(title: string) {
    
  }

  function handleDeleteAllTodo(){
    
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


          <div className="max-w-[300px]">
            <input
              className="py-3 px-4 border-4 border-cyan-500 focus:border-blue-500 rounded-lg hover:shadow-md cursor-pointer"
              onChange={(e) => setTodoText(e.target.value)}
              placeholder="Additinal text"
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
            
          <div className='flex ml-auto h-full rounded-md border-4 border-cyan-500 focus:border-blue-500 hover:opacity-50 transition'>
            <button className="py-3 px-4" onClick={handleTodoCreation}>
              Create Todo
            </button>
          </div>
        </div>

        <div className="flex border-4 border-blue-500 rounded-md m-2">
          <div className={`flex flex-wrap relative ${todos.length > 2 ? "justify-center items-center" : ''} `}>
            {todos.map((todo: { title: string; category: string; todoText: string }, index: number) => (
              <div className={`${checkbox ? "opacity-50 transition " : ''} flex flex-col m-4 h-auto max-w-[300px] rounded-md bg-slate-100`} key={index}>
                <div className="flex items-center justify-between p-2">
                  <div className='flex flex-col flex-1'>
                    <h1 className=''>{todo.title}</h1>
                    <p className='text-sm opacity-50'>{todo.category}</p>
                  </div>

                  <div className='flex justify-center items-center'>
                    <input 
                      onClick={() => setCheckbox((prev) => !prev)} 
                      id="default-checkbox" 
                      type="checkbox"
                      checked={checkbox}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" 
                    />
                  </div>
                </div>
					
                <div className="flex justify-center items-center h-auto min-h-[50px] rounded-lg bg-gray-200">
                  <div className='w-full m-2 overflow-hidden'>
                    <p className='font-semibold '>{todo.todoText.length > 30 ? <span>{todo.todoText.slice(0, 30)}...</span> : <span>{todo.todoText}</span>}</p>
                  </div>
                </div>

                <div className='flex flex-row items-center justify-evenly p-2'>
                  <p className='text-[12px] opacity-50 pl-2'>{new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })}</p>

                  <button className='p-2 ml-2 rounded-full cursor-pointer hover:bg-gray-300 transition ' disabled={checkbox}>
                    <img className='w-[30px] h-[30px]' src={pencilEdit.src} alt='editIcon'/>
                  </button>

                  <button className='p-2 rounded-full cursor-pointer hover:bg-red-200 transition'>
                    <img 
                      className='w-[30px] h-[30px]' 
                      onClick={() => handleDeleteTodo(title)} 
                      src={redBin.src} 
                      alt='editIcon' 
                    />
                  </button>
                </div>
              </div>
            ))}
            <div className='absolute right-5 bottom-5 cursor-pointer' onClick={handleDeleteAllTodo}>
              <h1 className='text-red-600 font-bold'>Delete All</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}