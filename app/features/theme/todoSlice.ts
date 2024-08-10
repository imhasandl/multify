import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TodoSlicerProps {
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
         state.push(action.payload)
       },
   },
})

export const { createTodo } = todoSlice.actions;

export default todoSlice.reducer;