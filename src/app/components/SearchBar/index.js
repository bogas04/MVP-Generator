import React from 'react';

export default ({ value = '' }) => {
  return (
    <div className="SearchBar">
      <form action="search" method="get">
        <input placeholder="Search" name="q" defaultValue={value}/>
        <button>Go</button>
      </form>
    </div>
  );
}
