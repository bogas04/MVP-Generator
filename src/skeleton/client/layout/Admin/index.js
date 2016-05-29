import { Nav, NavItem, Grid, Col, Glyphicon } from 'react-bootstrap';
import { LinkContainer as LC } from 'react-router-bootstrap';
import Loader from 'react-loader';
import Feed from '../Feed';
import { Link } from 'react-router';
import { logout } from '../../flux/actionCreators';
import styles from './styles';

export default class Admin extends React.Component {
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
    const { user, loggedIn, children } = this.props;

    return (
      <Grid className="Admin">
        <h1> <Glyphicon glyph="dashboard" /> <Link to="/admin">Admin Dashboard</Link> </h1>
        <Grid fluid>
          <Nav bsStyle="tabs" justified>
            <LC eventKey={2} to="/admin/create"><NavItem eventKey={2}>Create Entity</NavItem></LC>
            <LC eventKey={3} to="/admin/edit"><NavItem eventKey={3} disabled>Edit Entity</NavItem></LC>
            <LC eventKey={4} to="/admin/delete"><NavItem eventKey={4} disabled>Delete Entity</NavItem></LC>
          </Nav>

          { children }

        </Grid>
      </Grid>
    );
  }
}
