import React, { Component } from 'react';
import ReviewList from '../../layout/ReviewList';
import ReviewBox from '../../layout/ReviewBox';

export default class ReviewListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }
  loadReviews() {
    let url = `/reviews.json?`;
    if (this.props.userId) { url += `userId=${this.props.userId}&`; }
    if (this.props.entityId) { url += `entityId=${this.props.entityId}&`; }
    fetch(url)
    .then(r => r.json())
    .then(reviews => {
      if (reviews.length > 0) {
        this.setState({ reviews });
      }
    });
  }
  componentDidMount () {
    this.loadReviews();
  }
  render () {
    const { showReviewBox = true, showEntity = false} = this.props;
    return (
      <div>
        {showReviewBox && <ReviewBox entityId={this.props.entityId} onSubmit={() => this.loadReviews()}/>}
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

