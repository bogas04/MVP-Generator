import React, { Component } from 'react';
import styles from './styles';

export default class Search extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div style={styles.wrapper}>
        <section>
          <img style={styles.image} src={this.props.photo.profile} />
          <h4>{this.props.title}</h4>
        </section>
        <p>{this.props.description.slice(0, 140)}</p>
        <iframe src={`https://www.google.co.in/maps/embed?q=${this.props.location.splice(0,2).join(',')}&=Search%20Google%20Maps`}></iframe>
      </div>

    );
  }
}
