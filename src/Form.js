import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function Form ( {setTodoData, addTodo } ) {

    const INITIAL_STATE = {
        todo: "",
    }

    const id = uuid();

    const [formData,setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value});
        setTodoData({...formData, id:id});
    }

    const handleClick = (e) => {
        addTodo();
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="form">
            <div className="formGroup">
                <input onChange={handleChange} type="text" value={formData.todo} name="todo" placeholder="Enter todo"/>
                <button onClick={handleClick} type="button">Add Todo</button>
            </div>
        </form>
    )
}

export default Form;