import React, { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import "./css12/Task12.css";

const Task12 = () => {

    const [toDos, setToDos] = useState([{ id: 1, text: "Сообщения :", active: false }]);

    const createToDo = (text) => ({
        id: new Date().getTime(),
        text,
        active: false
    });

    const addNewToDo = (text) => {
        setToDos((toDos) => ([...toDos, createToDo(text)]))
    };

    return (
        <div className="Task12">
            <h3>Задание № 12</h3>
            {toDos.map(({ text, id, active }) => (
                <ToDo key={id} text={text} active={active} />
            ))}
            <ToDoForm ddNewToDo={addNewToDo} />
        </div>
    );
};

export default Task12;

