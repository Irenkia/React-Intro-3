import React from 'react';
import ToyotaCamryTable7 from './ToyotaCamryTable7';
import Task7Buttons from './Task7Buttons';
import DragDrop7 from './DragDrop7';
import '../styles/Task5.css';
import '../styles/Table.css';


const Task7 = () => {
    return (
        <div className="modelCar">
            <h3>Задание № 7</h3>
            <h2>Тойота Камри </h2>
            <ToyotaCamryTable7 />
            <Task7Buttons />
            <DragDrop7 />
        </div>
    );
};
export default Task7;

