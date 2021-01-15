import './App.css';
import React from 'react';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  return (
    <div className="App">
    <TodoInput />
    <TodoList />
    </div>
  );
}

export default React.memo(App);

