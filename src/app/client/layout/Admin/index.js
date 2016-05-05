import { logout } from '../../flux/actionCreators';
import TimeStamp from '../TimeStamp';
import { FormControl, Grid, Col, Jumbotron, Nav, NavItem, Glyphicon, Tabs, Tab } from 'react-bootstrap';
import ReviewList from '../../container/ReviewList';
import RatingList from '../../container/RatingList';
import BookmarkList from '../../container/BookmarkList';
import Dropzone from 'react-dropzone';
import styles from './styles';

export default class Admin extends React.Component {
  render () {
    const { user, loggedIn } = this.props;
    let leftSideBar = <div />;
    if(loggedIn) {
      leftSideBar = <div>
        <h3><Glyphicon glyph="cog" /> Settings</h3>
        <Nav bsStyle="pills" stacked >
          <NavItem title="Logout" onClick={this.props.logout}>
            <Glyphicon glyph="log-out" /> Logout
          </NavItem>
        </Nav>
      </div>;
    }

    const tabs = <Tabs>
      <Tab eventKey={1} title="Entities">
        <h3> <Glyphicon glyph="pencil" /> Entities </h3>
        list of entities goes here, with search
      </Tab>
      <Tab eventKey={2} title="Users">
        list of users go here, with search
      </Tab>
    </Tabs>;

    return (
      <div className="Admin">
        <h1> <Glyphicon glyph="dashboard" /> Admin Dashboard </h1>
        <Grid fluid>
          <Col md={3}> {leftSideBar} </Col>
          <Col md={6}> {tabs} </Col>
          <Col md={3}> Photos uploaded by user can go here? </Col>
        </Grid>
      </div>
    );
  }
}
