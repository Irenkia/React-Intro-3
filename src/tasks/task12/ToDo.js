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
        <div className="todoList" key={todo.id}>
            <div className="test">

                {editId === todo.id ? (<input type="text" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />) : (
                    <div

                        // className={todo.isComplete ? "complete" : ""}
                        className={todo.isComplete ? "theList li" : ""}
                        onClick={() => completeTodo(todo.id)}
                    >
                        <h3>{todo.text}</h3>
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
