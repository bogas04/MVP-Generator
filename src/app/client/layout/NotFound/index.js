import React from 'react';

export default function NotFound ({ location }) {
  return (
    <div className="NotFound">
      <div className="container">
        <h1> 404 Page Not Found 😞 </h1>
        <p> Couldn't find the page you requested for <code>{location.pathname}</code></p>
      </div>
    </div>
  );
};
