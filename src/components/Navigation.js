import React from 'react';
import logo12 from '../images/react-12.png';
import logo14 from '../images/react-14.jpg';

function Navigation() {
    return (
        <div id="navigation">

            <div className="navigation-left">
                <img src={logo12} alt="React logotype" />
            </div>
            <div className="navigation-center">
                <h2>Входное задание в интернатуру по REACT</h2>
                <h3>Тема:</h3>
                <p style={{ color: '#0E025E' }}>git, node, npm, основы html и css</p>
                <h3>Цель: </h3>
                <p style={{ color: '#0E025E' }}>изучить базовые функции git, node, npm.<br />
    Подготовить к дальнейшей работе систему.<br />
    Определить уровень умения верстки.</p>
            </div>
            <div className="navigation-right">
                <img src={logo14} alt="React logotype" />
            </div>

        </div>

    );
}

export default Navigation;
