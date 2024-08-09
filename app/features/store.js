import { configureStore } from "@reduxjs/toolkit";
import themeSlice from './theme/themeSlice'
import todoSlice from "./theme/todoSlice";

const store = configureStore({
   reducer: {
      theme: themeSlice,
      todo: todoSlice,
   },
})

export default store;