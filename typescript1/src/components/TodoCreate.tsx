import React, { useState } from 'react'
import App from '../App'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/TodoSlice';
import { TodoType } from '../types/Types';

function TodoCreate() {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('');
    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("Todo giriniz")
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        dispatch(createTodo(payload))
        setNewTodo(' ');
    }
    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                className='input-create' placeholder='Todo Giriniz..' type='text'></input>
            <button onClick={handleCreateTodo} className='button-create'>Oluştur</button>     {/* Biri buntona tıklarsa yukarıdaki fonksiyon çalışıcak eğer bir şey girilmezse uyarı verecek girilirse yeni newtodo oluşucak */}
        </div>
    )
}

export default TodoCreate