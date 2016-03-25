import React from 'react';
import Header from './Header';
import Footer from './Footer';
import config from '../../config';

export default function App ({ children }) {
  const { APP_NAME = 'App Name', URLS = [] } = config;
  return (
    <div className="App">
      <Header title={APP_NAME} urls={URLS} />
      <article style={{minHeight: '400px'}}>
        {children}
      </article>
      <Footer title={config.APP_NAME} />
    </div>
  );
};
