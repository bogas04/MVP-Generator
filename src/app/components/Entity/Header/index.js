import React from 'react';

export default ({ name = 'Entity name', photo = {}, rating = 4.3, description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }) => {
  return (
    <section style={{
      background: `url(${photo.cover}) 100% 100% / 100%` 
    }} >
    <img src={photo.profile} />
    <h1> {name} </h1>
    <p> {description} </p>
  </section>
  );
};
