import React from 'react';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';
import Navigation from './navigation/Navigation';

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
