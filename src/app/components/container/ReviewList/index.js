import React, { Component } from 'react';
import ReviewList from './ReviewList';
import ReviewBox from './ReviewBox';

export default class ReviewListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }
  loadComments() {
    const userId = 1; // TODO: Plug session/local storage/cookie saved userId
    fetch(`/reviews.json?userId=${userId}&entityId=${this.props.entityId}`)
    .then(r => r.json())
    .then(reviews => {
      if (reviews.length > 0) {
        this.setState({ reviews });
      }
    });
  }
  componentDidMount () {
    this.loadComments();
  }
  render () {
    return (
      <div>
        <ReviewBox entityId={this.props.entityId} onSubmit={() => this.loadComments()}/>
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

