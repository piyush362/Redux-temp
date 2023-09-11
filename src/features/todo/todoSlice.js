import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addToDo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            const id = action.payload
            state.todos = state.todos.filter(todo => todo.id !== id)
        }
    }
})


export const { addToDo, removeTodo } = todoSlice.actions
export default todoSlice.reducer