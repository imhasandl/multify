import { createSlice } from "@reduxjs/toolkit";
import type { ThemeState } from "@/types";

const initialState: ThemeState = {
   value: false
}

const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      turnDarkMode: (state) => {
         return { ...state, value: true };
      },
      turnLightMode: (state) => {
         return { ...state, value: false };
      },
   }
})

export const { turnDarkMode, turnLightMode } = themeSlice.actions

export default themeSlice.reducer