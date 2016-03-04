import React, { Component } from 'react';
import CommentList from './CommentList';

export default class CommentListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
  }
  componentDidMount () {
    fetch('/comments.json')
    .then(r => r.json())
    .then(comments => {
      this.setState({ comments });
    });
  }
  render () {
    return (
      <CommentList comments={this.state.comments} />
    );
  }
}

