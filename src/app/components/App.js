import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default ({ children }) => {
  return (
    <div className="App">
      <Header title="Zomato" urls={[
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Search', url: '/search' },
        { title: 'Entity', url: '/entity' },
        { title: 'Contact', url: '/contact' },
      ]} />
    <article>
      {children}
    </article>
    <Footer />
  </div>
  );
};
