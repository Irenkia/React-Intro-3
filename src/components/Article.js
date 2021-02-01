import React from 'react';

function Article() {
    //const {article} = props
    //const Header = <section>{article.Header}</section>
    //const navigation = <section>{article.navigation}</section>
    //const content = <section>{article.content}</section>
    //const footer = <section>{article.footer}</section>
    return (
        <div>
            <div id="wrapper">
        <div id="header">
       
          <div className="header-left">
            <img src="images/react-16.png" alt="React logotype" />
          </div>
          <div className="header-center">
            <h1 style={{color: '#0E0352'}}>React Intro</h1>
          </div>
          <div className="header-right">
            <img src="images/react-2.png" alt="React logotype" />
          </div>
        </div>

        <div id="navigation">
  
          <div className="navigation-left">
            <img src="images/react-12.png" alt="React logotype" />
          </div>
          <div className="navigation-center">
            <h2>Входное задание в интернатуру по REACT</h2>
            <h3>Тема:</h3>
            <p style={{color: '#0E025E'}}>git, node, npm, основы html и css</p>
            <h3>Цель: </h3>
            <p style={{color: '#0E025E'}}>изучить базовые функции git, node, npm.<br />
              Подготовить к дальнейшей работе систему.<br />
              Определить уровень умения верстки.</p>
          </div>
          <div className="navigation-right">
            <img src="images/react-14.jpg" alt="React logotype" />
          </div>
        </div>

        <div id="content">
       
          <h1>Обсуждаемый материал:</h1>
          <div className="app">
            <div className="list" />
          </div>
          <div id="menu">
            <h3><a href="сontent/version.html" target="_blank">1-читать тему</a></h3>    
            <h3><a href="сontent/git.html" target="_blank">2-читать тему</a></h3>
            <h3><a href="сontent/node.html" target="_blank">3-читать тему</a></h3>
            <h3><a href="сontent/npm.html" target="_blank">4-читать тему</a></h3>
            <h3><a href="сontent/html-1.html" target="_blank">5-читать тему</a></h3>
            <h3><a href="сontent/css-1.html" target="_blank">6-читать тему</a></h3>
          </div>
        </div>

        <div id="footer">
        
          <h2>Ирина Тютюн</h2>
          <p>Опубликовано 
            <time dateTime="2021-01-08">08 января 2021</time></p>
          <a href="https://github.com/Irenkia/React-Intro-3" target="_blank">GitHub</a>
          <p>  Дизайн фона</p>
          <a href="https://ru.depositphotos.com/39223635/stock-illustration-ice-abstract-geometric-vector-background.html" target="_blank">шаблон</a>
        </div>
      </div>
        </div>
    )
}


export default Article



