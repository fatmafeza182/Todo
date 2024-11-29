import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from '../types/Types'
import Todo from '../components/Todo'




const initialState: TodoInitialState = {              //burdaki initialstatemizin todoinitialstate tipinde olduğunu belirttim ve todos array dedim 
    todos: []
}
export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {              //todo oluşturma fonksiyonu yazdım
            state.todos = [...state.todos, action.payload];
        },
        removeTodoById: (state: TodoInitialState, action: PayloadAction<Number>) => {              // burda tipi number vermemizin nedeni id tipini önceden number olarak belirttiğimiz için
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        },
        updateTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos.map((todo: TodoType) => todo.id !== action.payload.id ? todo : action.payload)]
        }
    }
})



export const { createTodo, removeTodoById, updateTodo } = TodoSlice.actions

export default TodoSlice.reducer