import React from "react";
import List from "./List";
import Form from "./Form";
import '../css14/Task14.css';

const Task14 = (event) => (
    <>
        <div key={event.id} className="Task14" >
            <h3>Task № 14</h3>
            <h2>Articles</h2>
            <List />
            <h2>Add a new article</h2>
            <Form />
        </div>

    </>
);

export default Task14;
