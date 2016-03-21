import React from 'react';
import styles from './styles';

export default class ReviewBox extends React.Component {
  constructor(p) {
    super(p);
    this.state = {};
  }
  submit(e) {
    e.preventDefault();

    const { userId = 1, entityId } = this.props;
    const $reviewBody = e.currentTarget.querySelector('[name=reviewBody]');

    fetch(`/reviews.json`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, reviewBody: $reviewBody.value, entityId, })
    })
    .then(r => r.json())
    .then(r => {
      this.props.onSubmit();
      $reviewBody.value = '';
      console.log(r);
    });
  }
  render() {
    return (
      <div className="ReviewBox" style={styles.wrapper}>
        <form onSubmit={e => this.submit(e)}>
          <textarea className="form-control" name="reviewBody" style={styles.textarea} placeholder="Enter your comment" rows="4"></textarea>
          <button className="btn btn-info">Review</button>
        </form>
      </div>
    );
  }
};
