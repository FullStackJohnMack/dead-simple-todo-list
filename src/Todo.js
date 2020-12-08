import React from "react";


function Todo( { todo, removeTodo, id } ) {
  const handleClick = () => {
    removeTodo(todo.id);
  }

  return (

    <div className="todo">
      <h2 className="todo">{todo.todo}</h2>
      <button onClick={handleClick} className="removeButton">Delete Todo</button>
    </div>

  );
}

export default Todo;