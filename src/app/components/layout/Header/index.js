import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../SearchBar';
import styles from './styles';
import { connect } from 'react-redux';

export default connect(({user}) => ({user}))(
  function Header ({ user, title, urls = [], location }) {

    urls = urls.map(url => (
      <li style={styles.navItems} key={url.url}>
        <Link activeClassName='active-nav' activeStyle={styles.active} to={url.url} >{url.title}</Link>
      </li>
    ));

    let Login = <Link activeClassName='active-nav' activeStyle={styles.active} to="/login">Login</Link>;

    if(user !== {} && user.loggedIn) {
      Login = <Link activeClassName='active-nav' activeStyle={styles.active} to="/profile">{`${user.firstName} ${user.lastName}`}</Link>
    }

    return (
      <header className="Header" style={styles.wrapper}>

        <div className="container" style={styles.header}>
          <div style={styles.headerItem} className="col-md-3">
            {Login}
          </div>
          <h1 style={styles.headerItem} className="col-md-6 text-center">
            <Link to="/">{title}</Link>
          </h1>
          <div style={styles.headerItem} className="col-md-3">
            <SearchBar />
          </div>
        </div>

        <nav style={styles.navWrapper}>
          <ul style={Object.assign({}, styles.flexBox, styles.ul)} > {urls} </ul>
        </nav>

      </header>
    );
  });
