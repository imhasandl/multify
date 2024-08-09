import { createSlice } from "@reduxjs/toolkit";

export interface TodoSlicerProps {
   id: string,
   title: string;
   category: string;
   todoText: string;
}

const initialState: TodoSlicerProps = {
   id: "",
   title: "",
   category: "",
   todoText: "",
}

const todoSlice = createSlice({
   name: "todo",
   initialState,
   reducers: {
      createTodo: (state, action) => {
         state.id = action.payload.id
         state.title = action.payload.title;
         state.category = action.payload.category;
         state.todoText = action.payload.todoText;
      },
   },
})

export const { createTodo } = todoSlice.actions;

export default todoSlice.reducer;