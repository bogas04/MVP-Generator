import React, { Component } from 'react';
import styles from './styles';

export default class Rating extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Rating" style={styles.wrapper}>
        {"⭐️".repeat(parseInt(this.props.value))} {this.props.value}
      </div>
    );
  }
}
