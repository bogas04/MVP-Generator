import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
  }
  render() {
    return (
      <div className="Login">
        <form action="login" method="post" onSubmit={e => this.submit()}>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" onChange={e => this.change('email', e.currentTarget.value)} type="email" placeholder="jane@doe.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input className="form-control" onChange={e => this.change('password', e.currentTarget.value)} type="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
          <Link to="/signup">Create account</Link>
        </form>
      </div>
    );
  }
  change(type, value) {
    let obj = {};
    obj[type] = value;
    this.setState(obj);
  }
  submit() {
    console.log(this.state);
  }

}
