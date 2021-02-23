
import React from 'react';
import logo1v from '../images/version-control-system.png';
import logo1g from '../images/git-4.jpg';
import logo1n from '../images/node.js-1.jpg';
import logo1npm from '../images/npm-2.png';
import logo1h from '../images/html-1.png';
import logo1c from '../images/css-1.png';
import '../styles/Question.css'
import PropTypes from 'prop-types'

const Question = (props) => {
    const number_1 = 1;
    const number_2 = 2;
    const number_3 = 3;
    const number_4 = 4;
    const number_5 = 5;
    const number_6 = 6;
    const description_1 = 'Что такое система контроля версий и зачем она нужна';
    const description_2 = 'Git : a. checkout, add, commit, pull, push; b. Основы ветвления и слияния';
    const description_3 = 'Что такое nodejs, зачем он нужен и как устанавливать';
    const description_4 = 'Что такое менеджер пакетов, установка npm';
    const description_5 = 'Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, w3c валидация';
    const description_6 = 'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы';
    const logotype_1 = 'version-control-system';
    const logotype_2 = 'git logotype';
    const logotype_3 = 'nodejs logotype';
    const logotype_4 = 'npm logotype';
    const logotype_5 = 'html logotype';
    const logotype_6 = 'css logotype';

    let DataQuestions = [
        {
            id: 1,
            number: number_1,
            description: description_1,
            img: logo1v,
            logotype: logotype_1
        },
        {
            id: 2,
            number: number_2,
            description: description_2,
            img: logo1g,
            logotype: logotype_2
        },
        {
            id: 3,
            number: number_3,
            description: description_3,
            img: logo1n,
            logotype: logotype_3
        },
        {
            id: 4,
            number: number_4,
            description: description_4,
            img: logo1npm,
            logotype: logotype_4
        },
        {
            id: 5,
            number: number_5,
            description: description_5,
            img: logo1h,
            logotype: logotype_5
        },
        {
            id: 6,
            number: number_6,
            description: description_6,
            img: logo1c,
            logotype: logotype_6
        }

    ]

    let ElQuestion = DataQuestions.map((el) => {
        return (
            <div className="card" key={el.id}>
                {/*<question number={el.number} description={el.description} img={el.img} logotype={el.logotype} />*/}

                <div className="card-img">
                    <img
                        src={el.img}
                        alt={el.logotype} />
                </div>
                <div>
                    <h1>{el.number}</h1>
                    <p>{el.description}</p>
                </div>
            </div>
        )
    });

    return (
        <div className="app">
            <div className="list">
                {ElQuestion}
            </div>
        </div>
    )
};

Question.propTypes = {
    name: PropTypes.string
}

export default Question;


