import React from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import config from '../../../config';

export default class App extends React.Component {
  render () {
    const { APP_NAME = 'App Name', URLS = [] } = config;
    const { children } = this.props;
    return (
      <div className="App">
        <Header title={APP_NAME} urls={URLS} />
        <article style={{minHeight: '400px'}}>
          {children}
        </article>
        <Footer title={config.APP_NAME} />
      </div>
    );
  }
}
