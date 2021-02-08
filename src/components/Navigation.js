import React from 'react';
import logo12 from '../images/react-12.png';
import logo14 from '../images/react-14.jpg';
import '../styles/Navigation.css'

function Navigation() {
    const taskTitle = 'Входное задание в интернатуру по REACT';
    const lessonTopic = 'Тема:';
    const lessonContent = 'git, node, npm, основы html и css';
    const lessonGoal = 'Цель:';
    const rubric_1 = 'Изучить базовые функции git, node, npm.';
    const rubric_2 = 'Подготовить к дальнейшей работе систему.';
    const rubric_3 = 'Определить уровень умения верстки.';

    return (
        <div className="navigation">

            <div className="navigation-left">
                <img src={logo12} alt="React logotype" />
            </div>
            <div className="navigation-center">
                <h2>{taskTitle}</h2><br />
                <h3>{lessonTopic}</h3><br />
                <p>{lessonContent}</p><br />
                <h3>{lessonGoal}</h3><br />
                <p>{rubric_1}<br />
                    {rubric_2}<br />
                    {rubric_3}</p>
            </div>
            <div className="navigation-right">
                <img src={logo14} alt="React logotype" />
            </div>

        </div>

    );
}

export default Navigation;
