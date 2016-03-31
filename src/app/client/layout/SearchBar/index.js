import React from 'react';

export default function SearchBar ({ value = '' }) {
  return (
    <div className="SearchBar">
      <form action="search" method="get" className="form-inline">
        <div className="input-group">
          <input className="form-control" placeholder="Search" name="q" defaultValue={value}/>
          <div className="input-group-btn">
            <button className="btn btn-default">Go</button>
          </div>
        </div>
      </form>
    </div>
  );
}
