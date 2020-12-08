import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import Form from './Form';
import { useDispatch } from "react-redux";


function App() {
  
  const [todoData,setTodoData] = useState(null);

  const dispatch = useDispatch();

  const addTodo = () => dispatch({ 
    type: "ADD_TODO",
    payload: todoData
  });

  const removeTodo = (id) => dispatch({ 
    type: "REMOVE_TODO",
    payload: id
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form setTodoData={setTodoData} todoData={todoData} addTodo={addTodo}/>
      <TodoList removeTodo={removeTodo}/>
    </div>
  );
}

export default App;