import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Entity from './Entity';
import Search from './Search';
import Contact from './Contact';
import About from './About';
import NotFound from './NotFound';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute name="Home" component={Home} />
      <Route name="Contact" path="contact" component={Contact} />
      <Route name="Search" path="search" component={Search} />
      <Route name="About" path="about" component={About} />
      <Route name="Entity" path="entity" component={Entity} />
      <Route name="NotFound" path="*" component={NotFound} /> 
    </Route>
  </Router>
);
