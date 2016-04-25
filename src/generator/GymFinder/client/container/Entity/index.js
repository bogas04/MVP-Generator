import Entity from '../../layout/Entity';
import Loader from 'react-loader';

export default class EntityContainer extends React.Component {
  constructor(p) {
    super(p);
    this.state = {
      loaded: false,
      entity: {},
    };
  }
  render () {
    return <Loader loaded={this.state.loaded} radius={50}>
      <Entity {...this.state.entity} /> 
    </Loader>;
  }
  componentDidMount() {
    fetch(`/entity.json?param=id&value=${this.props.params.id}`)
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
