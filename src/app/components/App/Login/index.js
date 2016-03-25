import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Login">
        <form action="login" method="post" onSubmit={e => this.submit(e)}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" name="email" type="email" placeholder="e.g. jane@doe.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" name="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
          <Link to="/signup">Create account</Link>
        </form>
      </div>
    );
  }
  submit() {
    e.preventDefault();
    let $el = e.currentTarget;
    const body = JSON.stringify({
      email: $el.querySelector('[name=email]'),
      password: $el.querySelector('[name=password]'),
    });
    fetch('/login.json', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      body,
    })
    .then(r => r.json())
    .then(data => console.log(data))
    .catch(data => console.error(data));
  }
}
