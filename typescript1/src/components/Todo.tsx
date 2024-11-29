import React, { useState } from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/TodoSlice';
import { updateTodo } from '../redux/TodoSlice'

interface TodoProps {
    // burda todoProps un tipini oluşturdum
    todoProps: TodoType
}


function Todo({ todoProps }: TodoProps) {

    const { id, content } = todoProps;

    const dispatch = useDispatch();

    const [editable, setEditable] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState(content);

    const handleRemoveTodo = () => {        //  aşağıda  handleRemoveTodo ya tıklandığında burda aktifleşiyor dispatch sayesinde yakalayıp silme işlemi gerçekleşiyor
        dispatch(removeTodoById(id))
    }
    const handleUpdateTodo = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(updateTodo(payload))       // dispatch ile updateTodo yu yakaldım payloadı yazdırdım
        setEditable(false);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid gray', marginTop: '20px', padding: '10px', textSizeAdjust: '10px', height: '18px' }}>
            {editable ? <input type="text" style={{ width: '400px', border: 'none', borderBottom: '1px solid lightgray', outline: 'none' }} value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)} /> : <div>{content}</div>}
            <div>
                <IoMdRemoveCircle onClick={handleRemoveTodo} className='icons' style={{ marginRight: '3px', color: 'red' }} />

                {editable ? <FaCheck onClick={handleUpdateTodo} className='icons' style={{ color: 'goldenrod' }} /> : <FaEdit onClick={() => setEditable(true)} className='icons' style={{ color: 'goldenrod' }} />}
            </div>
        </div>
    )
}

export default Todo