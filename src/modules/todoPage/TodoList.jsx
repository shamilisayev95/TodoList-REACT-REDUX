import React from 'react';
import './todoStyle.css';

const Todo = () => {
    return (
        <>
        <h1><span className="styling">Todo</span>List</h1>
        <div className="input_div">
          <input type="text" className="input" placeholder="What Do You Want to Do..." />
          <button className="addButton"><i>Add</i></button>
        </div>
        <div className="container">
        </div>
        </>
    )
}

export default React.memo(Todo);