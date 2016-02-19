import React from 'react';

export default ({ }) => {
  return (
    <div className="SearchBar">
      <form action="search" method="get">
        <input placeholder="Search" name="q" />
        <button>Go</button>
      </form>
    </div>
  );
}
