import React, { useState } from 'react';
import "./css12/Task12.css";

const TodoForm = (props) => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            complete: false
        });
        setInput('');
    }

    return (
        <div className="todoList">
            <div className="header">
                <form onSubmit={handleSubmit} key={props.id}>
                    <input type="text" placeholder="написать задачу..." value={input} onChange={handleChange} key={props.id} />
                    <button onClick={handleSubmit}>Добавить</button>

                </form>
            </div>
        </div>
    );

};

export default TodoForm;
