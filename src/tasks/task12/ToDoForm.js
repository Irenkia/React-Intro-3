import React, { useState } from 'react';
import "./css12/Task12.css";

const TodoForm = (props) => {
    const [input, setInput] = useState(" ");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!input.trim()) {
        //     addNewToDo(input);
        // }
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            complete: false
        });
        setInput('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="написать задачу..." value={input} onChange={handleChange} />
                <button onClick={handleSubmit}>Добавить</button>
            </form>
        </div>

    );

};

export default TodoForm;
