import _ from '../constants';

export default (user = {}, { type, data }) => {
  let newUser = user;

  switch (type) {
    case _.LOGIN:
      newUser = {...user, ...data.user, loggedIn: true};
      break;
    case _.FETCH_USER:
      newUser = {...user, ...data.user, loggedIn: true};
      break;
    case _.LOGIN_ERROR: case _.LOGOUT: case _.FETCH_USER_ERROR:
      newUser = {};
      break;
  }
  return newUser;
};

