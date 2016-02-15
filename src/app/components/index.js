import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import Home from './Home';
import About from './About';
import Header from './Header';
import Entity from './Entity';
import Footer from './Footer';
import Contact from './Contact';
import Search from './Search';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header title="Zomato" urls={[
          { title: 'Home', url: '/' },
          { title: 'About', url: '/about' },
          { title: 'Search', url: '/search' },
          { title: 'Entity', url: '/entity' },
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
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute name="Home" component={Home} />
      <Route name="Contact" path="contact" component={Contact} />
      <Route name="Search" path="search" component={Search} />
      <Route name="About" path="about" component={About} />
      <Route name="Entity" path="entity" component={Entity} />
    </Route>
  </Router>
), document.getElementById('root'));
