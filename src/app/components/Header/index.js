import React from 'react';
import { Link } from 'react-router';

export default ({ title = 'App Name', urls = [] }) => {
  urls = urls.map(url => <li style={styles.navItems} key={url.url}><Link to={url.url} >{url.title}</Link></li>);

  return (
    <header style={styles.wrapper}>
      <h1 style={styles.heading}> {title} </h1>
      <nav>
        <ul style={styles.navWrapper} >
          {urls}
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  wrapper: {
    borderBottom: '1px solid black',
    margin: '0 0 10px 0',
  },
  heading: {
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  navWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItems: {
    listStyle: 'none',
    margin: '0 10px',
  }
};
