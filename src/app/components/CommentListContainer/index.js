import React, { Component } from 'react';

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

const CommentListItem = ({ commenter = {}, comment, timestamp = Date.now(), likes = 0}) => {
  return (
    <div style={{border: '1px solid black', borderRadius: '10px', padding: '10px', margin: '10px' }}>
      <img src={commenter.photo} alt={commenter.name} />
      <div>{commenter.name}</div>
      <p>{comment}</p>
      <div>{timestamp}</div>
      <div>{likes}</div>
    </div>
  );
};

const CommentList = ({ comments = [] }) => {
  return (
    <div>
      {comments.map(comment => (<CommentListItem key={comment.timestamp + Math.random()} {...comment} />))}
    </div>
  );
};
