import React from 'react'
import Todo from './Todo'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/Store'
import { TodoType } from '../types/Types'

function TodoList() {
    const { todos } = useSelector((state: RootState) => state.todo)
    // useSElector ile todos ları slice tan çektim
    return (
        <div>
            {todos && todos.map((todo: TodoType) =>
                <Todo key={todo.id} todoProps={todo} />
            )}
        </div>
    )
}

export default TodoList