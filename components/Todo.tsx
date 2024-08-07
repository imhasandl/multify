'use client'

import categoryData from '@/data/categoryTodoData'

export default function Todo() {
  return (
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

      {/* Input Section / Todo List */}
      <div className="w-full h-auto flex flex-col mt-5">
         <div className="flex flex-row m-4 h-auto gap-4">
            <div className="flex flex-col items-center">
               <input className="py-3 px-4 border-4 border-cyan-500 rounded-lg focus-within:border-blue-500 hover:shadow-md cursor-pointer" placeholder="Title..." type="text"/>
            </div>

            <div className="flex flex-col items-center justify-center">
               <select className="py-3 px-3 border-4 border-cyan-500 rounded-lg focus-within:border-blue-500 text-opacity-50 hover:shadow-md cursor-pointer">
                  <option value="">Category</option>
                  {categoryData.map(category => (
                     <option value={category}>{category}</option>
                  ))}
               </select>
            </div>

         </div>
            
         <div>
            
         </div>
      </div>
 </div>
  )
}
