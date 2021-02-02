import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';
import logo16 from 'D:/Onix/React-Intro-3/src/images/react-16.png';
import logo2 from 'D:/Onix/React-Intro-3/src/images/react-2.png';

//import logo16 from './images/react-16.png';
function Article() {
  //const {article} = props
  //const Header = <section>{article.Header}</section>
  //const navigation = <section>{article.navigation}</section>
  //const content = <section>{article.content}</section>
  //const footer = <section>{article.footer}</section>
  return (

    <div id="wrapper">
      <Header />
      <Navigation />
      <Content />
      <Footer />

    </div>

  )
}


export default Article;
