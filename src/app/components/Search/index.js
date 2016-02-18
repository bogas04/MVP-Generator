import React, { Component } from 'react';
import Item from './Item';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = { results: [] };
  }

  componentDidMount() {
    fetch('/search.json')
    .then(r => r.json())
    .then(r => {
      this.setState({ results: r.data });
    });
  }

  render() {
    const { query } = this.props.location;
    const results = this.state.results.map(r => <Item key={r.title} {...r} />);
    return (
      <div>
        <h3> You are searching for <code>{query.q || 'keyword'}</code> </h3>
        <article>
          {results}
        </article>
      </div>
    );
  }
}
