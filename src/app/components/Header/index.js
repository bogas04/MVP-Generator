import React from 'react';
import { Link } from 'react-router';
import SearchBar from '../SearchBar';
import styles from './styles';

export default function Header ({ title = 'App Name', urls = [], location }) {

  urls = urls.map(url => <li style={styles.navItems} key={url.url}><Link to={url.url} >{url.title}</Link></li>);

  return (
    <header className="Header" style={styles.wrapper}>

      <div style={styles.flexBox}>
        <div style={styles.login}><Link to="/login">Login</Link></div>
        <h1 style={styles.heading}><Link to="/">{title}</Link></h1>
        <div style={styles.searchBar}><SearchBar/></div>
      </div>

      <nav style={styles.navWrapper}>
        <ul style={Object.assign({}, styles.flexBox, styles.ul)} > {urls} </ul>
      </nav>

    </header>
  );
};
