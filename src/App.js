import './App.css';
import React from 'react';
import TodoInput from './components/TodoInput';
// import TodoList from './modules/todoPage/TodoList.jsx';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
    <TodoInput />
    <TodoList />
      {/* <TodoList /> */}
    </div>
  );
}

export default React.memo(App);
