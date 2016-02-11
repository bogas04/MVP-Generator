import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import Home from './Home/index.js';
import About from './About/index.js';
import Header from './Header/index.js';
import Footer from './Footer/index.js';
import Contact from './Contact/index.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="Zomato" urls={[
          { title: 'Home', url: '/' },
          { title: 'About', url: '/about' },
          { title: 'Contact', url: '/contact' },
        ]} />
      <article>
        {this.props.children}
      </article>
      <Footer />
    </div>
    );
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <IndexRoute name="Home" component={Home} />
      <Route name="Contact" path="contact" component={Contact} />
      <Route name="About" path="about" component={About} />
    </Route>
  </Router>
), document.getElementById('root'));
