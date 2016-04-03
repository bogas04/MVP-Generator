import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../SearchBar';
import styles from './styles';
import { connect } from 'react-redux';

export default connect(({user}) => ({user}), {

})(
function Header ({ user, title, urls = [] }) {
  urls = urls.map(url => (
    <li style={styles.navItem} key={url.url}>
      <Link activeClassName='active-nav' activeStyle={styles.active} to={url.url} >{url.title}</Link>
    </li>
  ));

  return (
    <nav className="navbar navbar-inverse navbar-static-top" style={styles.navWrapper}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/">{title.toUpperCase()}</Link>
        </div>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="nav navbar-nav">
            {urls}
          </ul>

          <form role="search" action="search" className="navbar-form navbar-left">
            <div className="input-group">
              <input className="form-control" placeholder="Search" name="q" />
              <div className="input-group-btn">
                <button className="btn btn-default">Go</button>
              </div>
            </div>
          </form>
          <ul className="nav navbar-nav navbar-right">
            <li><LoginButton user={user} /></li>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export function LoginButton ({ user }) {
  return (
    <Link activeClassName='active-nav' to={user.loggedIn ? '/profile' : 'login'}>
      {user.loggedIn ? `${user.firstName} ${user.lastName}`: `Login`}
    </Link>
  );
}
