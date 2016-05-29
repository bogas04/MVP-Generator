import _ from '../constants';
import { browserHistory as history } from 'react-router';

export const login = ({ email, password }) => (dispatch, getState) => {
  fetch('/login.json', {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify({ email, password }),
  })
  .then(checkStatus)
  .then(r => r.json())
  .then(saveToken)
  .then(user => {
    history.push(user.role === 'admin' ? '/admin' : '/profile');
    return dispatch({ type: _.LOGIN, data: { user } });
  })
  .catch(message => dispatch({ type: _.LOGIN_ERROR }));
};

export const fetchUser = () => (dispatch, getState) => {
  fetch('/user.json', {
    headers: {
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token'),
    },
  })
  .then(checkStatus)
  .then(r => r.json())
  .then(saveUser)
  .then(user => dispatch({ type: _.FETCH_USER, data: { user } }))
  .catch(message => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch({ type: _.FETCH_USER_ERROR })
  });
}

export const logout = (data) => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  history.push('/');
  return { type: _.LOGOUT, data: {} };
};

const saveUser = user => {
  if (user && user.id !== null) {
    localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve(user);
  } else {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return Promise.reject({  });
  }
};
const saveToken = response => {
  const { user, token } = response;
  if (user && user.id !== null && token) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    return Promise.resolve({ ...user, loggedIn: true, });
  } else {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return Promise.reject({ });
  }
}
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    var error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
};

export default {
  login,
  logout,
  fetchUser,
};
