import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export interface TodoSlicerProps {
   id: string
   title: string
   category: string
   todoText: string
}

const initialState: TodoSlicerProps[] = []

const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: { 
      createTodo: (state, action) => {
         const newTodo: TodoSlicerProps = {
            id: uuidv4(),
            title: action.payload.title,
            category: action.payload.category,
            todoText: action.payload.todoText
         }
         state.unshift(newTodo)
      },
      deleteTodo: (state, action: PayloadAction<string>) => {
         return state.filter(todo => todo.id !== action.payload);
      }
   },
})

export const { createTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;