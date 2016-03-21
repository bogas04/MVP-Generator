import React, { Component } from 'react';

export default class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.state = { bookmarked: this.props.bookmarked || false, };
  }
  toggleState(e) {
    //fetch()
    this.setState({ bookmarked: !this.state.bookmarked });
  }
  render() {
    return (
      <button onClick={e => this.toggleState(e)} className={`Bookmark btn ${this.state.bookmarked ? 'btn-danger': 'btn-default'}`}>
        <span className="glyphicon glyphicon-bookmark"></span> {this.state.bookmarked ? 'Bookmarked' : 'Bookmark'}
      </button>
    );
  }
}
