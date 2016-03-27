// For SSR support 
let localStorage = localStorage || { setItem() {}, removeItem() { } };
const saveToken = response => {
  if (response.token) {
    localStorage.setItem('token', response.token);
    return Promise.resolve({ message: 'Logged in' });
  } else {
    localStorage.removeItem('token');
    return Promise.reject({ message: 'Failed login' });
  }
};

export const login = ({ email, password }) => fetch('/login.json', {
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'post',
  body: JSON.stringify({ email, password }),
})
.then(r => r.json())
.then(saveToken);

export const logout = Promise.resolve(localStorage.removeItem('token'));
