import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './container/App';
import EntityContainer from './container/Entity';
import Dashboard from './container/Dashboard';
import Search from './container/Search';

import Home from './layout/Home';
import Contact from './layout/Contact';
import About from './layout/About';
import Login from './layout/Login';
import Signup from './layout/Signup';
import User from './layout/User';
import NotFound from './layout/NotFound';

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
