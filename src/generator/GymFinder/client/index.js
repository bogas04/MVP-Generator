import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory as history } from 'react-router';
import configStore from './flux/store';
import { Provider } from 'react-redux';
import routes from './routes';

//let store = configStore(window.__INITIAL_STATE__);

let user = {};
if (localStorage.getItem('token') !== null) {
  user = {...user, loggedIn: true, ...JSON.parse(localStorage.getItem('user'))};
}
let store = configStore({
  user,
  //keyword: localStorage.getItem('searchKeyword') || '',
});

render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('root'));
