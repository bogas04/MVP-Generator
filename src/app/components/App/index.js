import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function App ({ children }) {
  const title = 'Zomato';
  const urls = [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Search', url: '/search' },
    { title: 'Dashboard', url: '/dashboard' },
    { title: 'Contact', url: '/contact' },
  ];

  return (
    <div className="App">
      <Header title={title} urls={urls} />
      <article style={{minHeight: '400px'}}>
        {children}
      </article>
      <Footer title={title}/>
    </div>
  );
};
