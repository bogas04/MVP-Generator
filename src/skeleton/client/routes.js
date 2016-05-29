import React from 'react';
import { Route, IndexRoute } from 'react-router';
import auth from './auth';

import App from './container/App';
import Entity from './container/Entity';
import Dashboard from './container/Dashboard';
import Profile from './container/Profile';
import Search from './container/Search';

import Admin from './container/Admin';
import Default from './layout/Admin/Default';
import CreateEntity from './layout/Admin/CreateEntity';

import Home from './layout/Home';
import Contact from './layout/Contact';
import About from './layout/About';
import Login from './layout/Login';
import Signup from './layout/Signup';
import NotFound from './layout/NotFound';

export default (
  <Route path="/" component={App} >
    <IndexRoute name="Home" component={Home} />

    <Route name="Contact" path="contact" component={Contact} />
    <Route name="Search" path="search" component={Search} />
    <Route name="About" path="about" component={About} />

    <Route onEnter={auth(false)} name="Login" path="login" component={Login} />
    <Route onEnter={auth(false)} name="Signup" path="signup" component={Signup} />

    <Route onEnter={auth(true)} name="Dashboard" path="profile" component={Dashboard} />
    <Route onEnter={auth(true, '/admin')} name="Admin" path="admin" component={Admin}>
      <IndexRoute component={Default} />
      <Route path="create" component={CreateEntity} />
    </Route>

    <Route name="User" path="user/:username" component={Profile} />
    <Route name="Entity" path="entity/:id" component={Entity} />

    <Route name="NotFound" path="*" component={NotFound} />
  </Route>
);
