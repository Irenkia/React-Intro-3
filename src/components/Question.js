
//-------------------------------------------------------------------------------------------------------------------
import React from 'react';
//import DataQuestion from './DataQuestion';

import logo1v from '../images/version-control-system.png';
import logo1g from '../images/git-4.jpg';
import logo1n from '../images/node.js-1.jpg';
import logo1npm from '../images/npm-2.png';
import logo1h from '../images/html-1.png';
import logo1c from '../images/css-1.png';
import '../styles/Question.css'

const Question = (props) => {

    let DataQuestions = [
        {
            number: '1',
            description: 'Что такое система контроля версий и зачем она нужна',
            img: { logo1v },
            logotype: 'version-control-system'
        },
        {
            number: '2',
            description: 'Git : a. checkout, add, commit, pull, push; b. Основы ветвления и слияния',
            img: { logo1g },
            logotype: 'git logotype'
        },
        {
            number: '3',
            description: 'Что такое nodejs, зачем он нужен и как устанавливать',
            img: { logo1n },
            logotype: 'nodejs logotype'
        },
        {
            number: '4',
            description: 'Что такое менеджер пакетов, установка npm',
            img: { logo1npm },
            logotype: 'npm logotype'
        },
        {
            number: '5',
            description: 'Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, w3c валидация',
            img: { logo1h },
            logotype: 'html logotype'
        },
        {
            number: '6',
            description: 'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы',
            img: { logo1c },
            logotype: 'css logotype'
        }

    ]

    let elQuestion = DataQuestions.map((el) => {
        return (
            <question number={el.number} description={el.description} img={el.img} logotype={el.logotype} />
        )
    });

    return (
        <div className="card">
            {elQuestion}
            <div className="card-img">
                <img
                    src={props.el.img}
                    alt={props.el.logotype} />
            </div>
            <div>
                <h1>{props.el.number}</h1>
                <p>{props.el.description}</p>
            </div>
        </div>

    )
};

export default Question;

//ReactDOM.render(app, document.getElementById('root'));

//const domContainer = document.querySelector('#root_container');
//ReactDOM.render(app(Question), domContainer);

//---------------------------------------------------------------------------------------------------------------------
/*
//-----------------------------------------------------------------------------------------------------------------

const Question = DataQuestion.map(question => {
    return (
        <Question key={question.number} description={question.description} img={question.img} logotype={question.logotype} />
    )
}

export default Question;

//--------------------------------------------------------------------------------------------------------------------
/*
//-----------------------------------------------------------------------------------------------------------------------
var questions = [{
    number: '1',
    description: 'Что такое система контроля версий и зачем она нужна',
    img: 'images/version-control-system.png',
    logotype: 'version-control-system'
}, {
    number: '2',
    description: 'Git : a. checkout, add, commit, pull, push; b. Основы ветвления и слияния',
    img: 'images/git-4.jpg',
    logotype: 'git logotype'
}, {
    number: '3',
    description: 'Что такое nodejs, зачем он нужен и как устанавливать',
    img: 'images/node.js-1.jpg',
    logotype: 'nodejs logotype'
}, {
    number: '4',
    description: 'Что такое менеджер пакетов, установка npm',
    img: 'images/npm-2.png',
    logotype: 'npm logotype'
}, {
    number: '5',
    description: 'Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, w3c валидация',
    img: 'images/html-1.png',
    logotype: 'html logotype'
}, {
    number: '6',
    description: 'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы',
    img: 'images/css-1.png',
    logotype: 'css logotype'
}];

function createQuestion(question) {
    return "\n      <div class=\"card\">\n          <div class=\"card-img\">\n              <img\n                src=\"".concat(question.img, "\"\n                alt=\"").concat(question.logotype, "\">\n          </div>\n          <h1>").concat(question.number, "</h1>\n          <p>").concat(question.description, "</p>\n      </div>\n    ");
}

var templates = questions.map(function (question) {
    return createQuestion(question);
});
var html = templates.join(' ');
document.querySelector('.list').innerHTML = html;
*/


/*
const questions = [
    { number: '1', description: 'Что такое система контроля версий и зачем она нужна', img: 'images/version-control-system.png', logotype: 'version-control-system' },
    { number: '2', description: 'Git : a. checkout, add, commit, pull, push; b. Основы ветвления и слияния', img: 'images/git-4.jpg', logotype: 'git logotype' },
    { number: '3', description: 'Что такое nodejs, зачем он нужен и как устанавливать', img: 'images/node.js-1.jpg', logotype: 'nodejs logotype' },
    { number: '4', description: 'Что такое менеджер пакетов, установка npm', img: 'images/npm-2.png', logotype: 'npm logotype' },
    { number: '5', description: 'Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, w3c валидация', img: 'images/html-1.png', logotype: 'html logotype' },
    { number: '6', description: 'Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы', img: 'images/css-1.png', logotype: 'css logotype' }
]

function createQuestion(question) {
    return `
      <div class="card">
          <div class="card-img">
              <img
                src="${question.img}"
                alt="${question.logotype}">
          </div>
          <h1>${question.number}</h1>
          <p>${question.description}</p>
      </div>
    `
}


const templates = questions.map(question => createQuestion(question))
const html = templates.join(' ')

document.querySelector('.list').innerHTML = html
*/
//export default Arr;
