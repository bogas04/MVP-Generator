import React, { Component } from 'react';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }
  render() {
    return (
      <div className="Signup container-fluid">
        <form onSubmit={e => this.submit(e)}>
          {this.state.message.length > 0 && <div className="alert">{this.state.message}</div>}
          <div className="form-group row">
            <div className="col-md-6">
              <label>First Name</label>
              <input name="firstName" className="form-control" type="text" placeholder="Enter your first name" />
            </div>
            <div className="col-md-6">
              <label>Last Name</label>
              <input name="lastName" className="form-control" type="text" placeholder="Enter your last name" />
            </div>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input onChange={e => this.checkUsername(e.currentTarget.value)} name="username" className="form-control" type="text" placeholder="Enter username" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input onChange={e => this.checkEmail(e.currentTarget.value)} name="email" className="form-control" type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label>Password</label>
              <input name="password" className="form-control" type="password" placeholder="Enter your password" />
            </div>
            <div className="col-md-6">
              <label>Re enter your password</label>
              <input name="confirmPassword" className="form-control" type="password" placeholder="Re-enter your password" />
            </div>
          </div>
          <button className="btn btn-default">Sign me up!</button>
        </form>
      </div>
    );
  }
  checkEmail(email) {

  }
  checkUsername(username) {

  }
  submit(e) {
    e.preventDefault();
    const $el = e.currentTarget;
    const body = JSON.stringify({
      username: $el.querySelector('[name=username]').value,
      email: $el.querySelector('[name=email]').value,
      firstName: $el.querySelector('[name=firstName]').value,
      lastName: $el.querySelector('[name=lastName]').value,
      password: $el.querySelector('[name=password]').value,
      confirmPassword: $el.querySelector('[name=confirmPassword]').value,
    });
    fetch('/signup.json', {
      headers: { 'Content-Type': 'application/json', }, method: 'post', body,
    })
    .then(r => r.json())
    .then(({ message }) => {
      this.setState({ message });
    })
    .catch(e => {
      this.setState({ message });
      console.error(e)
    });
  }
}
