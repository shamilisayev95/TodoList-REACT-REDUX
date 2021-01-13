import React from 'react';
import {useDispatch} from 'react-redux'; 
import { onDeleteTodo } from "../modules/todoPage/actions";

function TodoItem({todo}) {
    const dispatch = useDispatch()
    return (
        <div>
            <div className='item'>
                <div>{todo.name}</div>
                <button className='removeButton' 
                        onClick={() => 
                        dispatch(onDeleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default React.memo(TodoItem);
