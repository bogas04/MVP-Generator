import React from 'react';
import { Link } from 'react-router';
import styles from './styles';

export default ({ title = 'App Name', urls = [] }) => {
  urls = urls.map(url => <li style={styles.navItems} key={url.url}><Link to={url.url} >{url.title}</Link></li>);

  return (
    <header style={styles.wrapper}>
      <h1 style={styles.heading}><Link to="/">{title}</Link></h1>

      <nav>
        <ul style={styles.navWrapper} >
          {urls}
          <li style={styles.navItems} >
            <form action="search" method="get">
              <input placeholder="Search" name="q" />
              <button>Go</button>
            </form>
          </li>
        </ul>
      </nav>

    </header>
  );
};
