import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../redux/TodoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer            //  storu slice a bağladım ben burda todoReducer ile slice taki initialState bağlandım
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch