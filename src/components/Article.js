import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import Navigation from './Navigation';

function Article() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </div>
  )
}


export default Article;
