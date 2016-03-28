import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './App/Home';
import Contact from './App/Contact';
import Search from './App/Search';
import About from './App/About';
import Login from './App/Login';
import Signup from './App/Signup';
import Dashboard from './App/Dashboard';
import User from './App/User';
import EntityContainer from './App/EntityContainer';
import NotFound from './App/NotFound';

export default (
  <Route path="/" component={App} >
    <IndexRoute name="Home" component={Home} />
    <Route name="Contact" path="contact" component={Contact} />
    <Route name="Search" path="search" component={Search} />
    <Route name="About" path="about" component={About} />

    <Route name="Login" path="login" component={Login} />
    <Route name="Signup" path="signup" component={Signup} />
    <Route name="Dashboard" path="dashboard" component={Dashboard} />

    <Route name="User" path="user/:id" component={User} />
    <Route name="Entity" path="entity/:id" component={EntityContainer} />

    <Route name="NotFound" path="*" component={NotFound} />
  </Route>
);
