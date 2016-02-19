import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import Contact from './Contact';
import Search from './Search';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import User from './User';
import Entity from './Entity';
import NotFound from './NotFound';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute name="Home" component={Home}/>
      <Route name="Contact" path="contact" component={Contact}/>
      <Route name="Search" path="search" component={Search}/>
      <Route name="About" path="about" component={About}/>

      <Route name="Login" path="login" component={Login}/>
      <Route name="Signup" path="signup" component={Signup}/>
      <Route name="Dashboard" path="dashboard" component={Dashboard}/>

      <Route name="User" path="user/:id" component={User}/>
      <Route name="Entity" path="entity/:id" component={Entity}/>

      <Route name="NotFound" path="*" component={NotFound}/> 
    </Route>
  </Router>
);
