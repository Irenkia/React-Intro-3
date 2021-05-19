import React from 'react';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import Task14 from './Components/task14/js/Task14';

function Article() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Task14 />
      <Content />
      <Footer />
    </div>
  )
}

export default Article;
