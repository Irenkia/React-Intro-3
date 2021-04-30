import React from "react";
import "./css12/Task12.css";

const Todo = ({
    todos,
    completeTodo,
    removeTodo,
    editTodo,
    editId,
    handleEditChange,
    inputValue,
    setInputValue
}) => {
    return todos.map((todo) => (
        <div className="todoList">
            <div className="header">

                {editId === todo.id ? (<input type="text" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />) : (
                    <div
                        key={todo.id}
                        // className={todo.isComplete ? "complete" : ""}
                        className={todo.isComplete ? "theList li" : ""}
                        onClick={() => completeTodo(todo.id)}
                    >
                        {todo.text}
                    </div>
                )}
                {editId === todo.id ? (
                    <button onClick={() => editTodo(todo.id, inputValue)}>Добавить</button>
                ) : (
                    <div>
                        <button onClick={() => handleEditChange(todo.id, todo.text)}>Изменить</button>
                        <button onClick={() => removeTodo(todo.id)}>Удалить</button>
                    </div>
                )}


            </div>
        </div>
    ));
};

export default Todo;
