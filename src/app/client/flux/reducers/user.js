import _ from '../constants';

export default (user = {}, { type, data }) => {
  let newUser = user;

  switch (type) {
    case _.LOGIN:
      newUser = {...user, ...data.user, loggedIn: true};
      break;
    case _.LOGIN_ERROR:
      newUser = {...user, loggedIn: false};
      break;
    case _.LOGOUT:
      newUser = {};
      break;
    case _.FETCH_USER:
      newUser = {...user, ...data.user};
      break;
    case _.FETCH_USER_ERROR:
      newUser = {};
      break;
  }
  return newUser;
};

