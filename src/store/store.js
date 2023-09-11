import { configureStore } from "@reduxjs/toolkit"
import toDoReducer from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: toDoReducer,
})