import React from 'react';
import MyBooks6 from './MyBooks6';
import MemeGenerator6 from './MemeGenerator6';
import '../styles/Task6.css';

const Task6 = () => {

    return (
        <div className="Task6">
            <h3>Задание № 6</h3>
            <h2>Книги Игры Престолов </h2>
            <h3>Получить список из API и отобразить его</h3>
            <MyBooks6 />
            <MemeGenerator6 />
        </div>
    );
};

export default Task6;


