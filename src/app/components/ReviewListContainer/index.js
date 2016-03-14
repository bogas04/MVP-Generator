import React, { Component } from 'react';
import ReviewList from './ReviewList';

export default class ReviewListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }
  componentDidMount () {
    const userId = 1; // TODO: Plug session/local storage/cookie saved userId
    fetch(`/reviews.json?userId=${userId}&entityId=${this.props.entityId}`)
    .then(r => r.json())
    .then(reviews => {
      if (reviews.length > 0) {
        this.setState({ reviews });
      }
    });
  }
  render () {
    return (
      <ReviewList reviews={this.state.reviews} />
    );
  }
}

