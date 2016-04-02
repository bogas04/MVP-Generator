import React, { Component } from 'react';
import Rating from '../Entity/Rating';
import TimeStamp from 'react-timeago';

export default class RatingList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ratings } = this.props;
    return (
      <div className="RatingList">
        {ratings.map(({value, entity, createdAt}) => (
          <div key={value + entity.title}>
            <Rating editing={false} value={value} /> for {entity.title} <TimeStamp date={createdAt} />
          </div>
          ))
        }
      </div>
    );
  }
}
