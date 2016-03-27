import React, { Component } from 'react';
import styles from './styles';

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { color, value } = this.props;
    return (
      <div className="Rating" style={styles.wrapper({ color })} >
        {"⭐️".repeat(parseInt(value))} {value}
      </div>
    );
  }
}
