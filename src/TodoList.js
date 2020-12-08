import React from "react";
import { useSelector } from "react-redux";
import Todo from './Todo';



function TodoList( {removeTodo} ) {

    const todos = useSelector(store => store);

    let list = todos.map(todo => {
        return <Todo todo={todo} key={todo.id} removeTodo={removeTodo}/>
    })



  return (

      <div className="todoBoard">
        {list}
      </div>

  );
}

export default TodoList;