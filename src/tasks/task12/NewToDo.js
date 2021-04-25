import React, { useState } from 'react';
//import Task12 from "./Task12.js"
import "./css12/Task12.css";

const NewToDo = ({ addNewToDo }) => {
    const [input, setInput] = useState(" ");

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // if (input.trim()) {
        //     addNewToDo(input);
        // }
        setInput('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Новое сообщение" value={input} onChange={handleInput} />
                <button type="submit">Добавить новое сообщение</button>
            </form>
        </div>

    );

};

export default NewToDo;
