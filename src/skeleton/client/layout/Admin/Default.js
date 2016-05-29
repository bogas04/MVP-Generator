import { Nav, NavItem, Grid, Col, Glyphicon } from 'react-bootstrap';
import { LinkContainer as LC } from 'react-router-bootstrap';
import Loader from 'react-loader';
import Feed from '../Feed';
import { logout } from '../../flux/actionCreators';
import styles from './styles';

export default class Default extends React.Component {
  constructor(p) {
    super(p);
    this.state = { items: [], loaded: false };
    fetch('/entity.json')
      .then(r => r.json())
      .then(items => {
        this.setState({ items, loaded: true });
      })
      .catch(error => console.log(error));
  }
  render () {
    const { user, loggedIn } = this.props;
    return <Loader loaded={this.state.loaded} radius={50}> <Feed items={this.state.items} /> </Loader>;
  }
}
