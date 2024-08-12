import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TodoSlicerProps } from "@/types";

const initialState: TodoSlicerProps[] = []

const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: { 
      createTodo: (state, action) => {
         state.unshift(action.payload)
       },
   },
})

export const { createTodo } = todoSlice.actions;

export default todoSlice.reducer;