import React from 'react';
import Entity from './Entity';

export default class EntityContainer extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      loaded: false,
      entity: {},
    };
  }
  render () {
    return this.state.loaded ? <Entity {...this.state.entity} /> : <h1> Loading ... </h1>;
  }
  componentDidMount() {
    fetch(`/entity.json?id=${this.props.params.id}`)
    .then(r => r.json())
    .then(data => {
      if (data.length === 1) {
        this.setState({ loaded: true, entity: data[0] });
      } else {
        throw Error('Not found');
      }
    })
    .catch(error => console.log(error));
  }
}
