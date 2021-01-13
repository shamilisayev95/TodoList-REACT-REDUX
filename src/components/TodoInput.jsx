import React, { useState } from 'react'
import { onAddTodo } from '../modules/todoPage/actions'
import {v1 as uuid} from 'uuid';
import {useDispatch} from 'react-redux'; 

function TodoInput() {
    const [name, setName] = useState();
    const dispatch = useDispatch();
    return (
        <div>
            <h1><span className="styling">Todo</span>List</h1>
            <div className="input_div">
                <input type="text" 
                       onChange={(e) => setName(e.target.value)}
                       value={name}
                       className="input" 
                       placeholder="What Do You Want to Do..." 
                /> 
                <button className="addButton" 
                        onClick={() => {
                            dispatch(onAddTodo(
                                {
                                    id: uuid(),
                                    name: name
                                }
                            ));
                            setName('');
                        }}

                >Add</button>
            </div>
        </div>
    )
}

export default React.memo(TodoInput);
