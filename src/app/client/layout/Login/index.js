import React, { Component } from 'react';
import { Link } from 'react-router';
import { login } from '../../flux/actionCreators';
import { connect } from 'react-redux';

// Closest to decorator syntax @connect
export default connect(
  ({ user }) => ({ user }),
    { login }
)(
class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loggedIn = null, user } = this.props.user;
    let alert  = <div></div>;
    if (loggedIn !== null) {
      alert = <div className="alert">{loggedIn ? 'Logged in!' : 'Error!'}</div>
    }
    return (
      <div className="Login">
        {alert}
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
  submit(e) {
    e.preventDefault();
    let $el = e.currentTarget;
    const email = $el.querySelector('[name=email]').value;
    const password = $el.querySelector('[name=password]').value;
    const { login } = this.props;

    login({ email, password });
  }
}
)
