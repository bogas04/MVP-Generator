import React from 'react';
import Header from './Header';
import Footer from './Footer';
import config from '../../config';
import { connect } from 'react-redux';

// Closest to decorator syntax @connect
export default connect(
  state => state
)(
class App extends React.Component {
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
)
