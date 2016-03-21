import React, { Component } from 'react';

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Signup">
        <form onSubmit={e => this.submit(e)}>
          <div className="form-group">
            <label>Name</label>
            <input className="form-control" type="text" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input className="form-control" type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group row">
            <div className="col-md-6">
              <label>Password</label>
              <input className="form-control" type="text" placeholder="Enter your password" />
            </div>
            <div className="col-md-6">
              <label>Re enter your password</label>
              <input className="form-control" type="text" placeholder="Re-enter your password" />
            </div>
          </div>
          <button className="btn btn-default">Sign me up!</button>
        </form>
      </div>
    );
  }
}
