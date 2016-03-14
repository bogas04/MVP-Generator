import React from 'react';
import styles from './styles';

export default class ReviewBox extends React.Component {
  constructor(p) {
    super(p);
    this.state = {};
  }
  submit(e) {
    e.preventDefault();

    const userId = 1; // TODO: Plug session/cookie/local storage saved userId
    const reviewBody = e.currentTarget.querySelector('[name=reviewBody]').value;

    fetch(`/reviews.json`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userId, reviewBody, entityId: this.props.entityId, })
    })
    .then(r => r.json())
    .then(r => console.log(r));
  }
  render() {
    return (
      <div className="ReviewBox" style={styles.wrapper}>
        <form onSubmit={e => this.submit(e)}>
          <textarea name="reviewBody" style={styles.textarea} placeholder="Enter your comment" rows="4"></textarea>
          <button>Review</button>
        </form>
      </div>
    );
  }
};
