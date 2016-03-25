import React, { Component } from 'react';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }
  submit(e) {
    e.preventDefault();
    const body = new FormData(e.currentTarget);
    fetch('/signup.json', {
      method: 'post',
      body,
    })
    .then(e => {
      console.log(e);
      this.setState({ message: e });
    })
    .catch(e => console.error(e));
  }
  render() {
    return (
      <div className="Signup">
        <form onSubmit={e => this.submit(e)}>
          {this.state.message.length > 0 && <div className="alert">{this.state.message}</div>}
          <div className="form-group">
            <label>First Name</label>
            <input name="firstName" className="form-control" type="text" placeholder="Enter your first name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input name="lastName" className="form-control" type="text" placeholder="Enter your last name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label>Password</label>
              <input name="password" className="form-control" type="text" placeholder="Enter your password" />
            </div>
            <div className="col-md-6">
              <label>Re enter your password</label>
              <input name="confirmPassword" className="form-control" type="text" placeholder="Re-enter your password" />
            </div>
          </div>
          <button className="btn btn-default">Sign me up!</button>
        </form>
      </div>
    );
  }
}
