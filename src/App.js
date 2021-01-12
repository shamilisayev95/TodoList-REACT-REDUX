import './App.css';
import React from 'react';
import TodoList from './modules/todoPage/TodoList.jsx';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default React.memo(App);
