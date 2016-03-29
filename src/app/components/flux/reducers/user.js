import _ from '../constants';

export default (user = {}, { type, data }) => {
  let newUser = user;

  switch (type) {
    case _.LOGIN:

      fetch('/login.json', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        body: JSON.stringify({ email, password }),
      })
      .then(r => r.json())
      .then(saveToken)
      .then();
      newUser = { yolo: "logo" };

      break;
    case _.LOGOUT:
      Promise.resolve(localStorage.removeItem('token'));
      newUser = {  };
      break;
  }

  return newUser;
};

const saveToken = response => {
  if (response.token) {
    localStorage.setItem('token', response.token);
    return Promise.resolve({ message: 'Logged in' });
  } else {
    localStorage.removeItem('token');
    return Promise.reject({ message: 'Failed login' });
  }
};
