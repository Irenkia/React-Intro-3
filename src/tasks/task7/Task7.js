import React from 'react';
import ToyotaCamryTable7 from './ToyotaCamryTable7.js';
import Task7Buttons from './Task7Buttons.js';
import DragDrop7 from './DragDrop7.js';
// import '../styles/Task5.css';
// import '../styles/Table.css';
import '../task5/css5/Task5.css';
import '../taskCSS/Table.css';
import './css7/Task7.css';
import './css7/DragDrop7.css';
import './css7/Task7Buttons.css';

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

