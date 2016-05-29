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
    fetch(`/entity.json?id=${this.props.params.id}`)
      .then(r => r.json())
      .then(entity => {
        this.setState({ loaded: true, entity });
      })
      .catch(error => console.log(error));
  }
}
