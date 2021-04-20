import React from 'react';
import ToyotaCamryTable7 from './ToyotaCamryTable7.js';
import Buttons7 from '../../hooks/Buttons7.js';
import DragDrop7 from '../../hooks/DragDrop7.js';
import './css7/Task7.css';

const Task7 = () => {
    return (
        <div className="modelCar">
            <h3>Задание № 7</h3>
            <h2>Тойота Камри </h2>
            <ToyotaCamryTable7 />
            <Buttons7 />
            <DragDrop7 />
        </div>
    );
};
export default Task7;

