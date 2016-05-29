import { logout } from '../../flux/actionCreators';
//import TimeStamp from 'react-timeago';
import TimeStamp from '../TimeStamp';
import { FormControl, Grid, Col, Jumbotron, Nav, NavItem, Glyphicon, Tabs, Tab } from 'react-bootstrap';
import ReviewList from '../../container/ReviewList';
import RatingList from '../../container/RatingList';
import BookmarkList from '../../container/BookmarkList';
import Dropzone from 'react-dropzone';
import styles from './styles';

export default class User extends React.Component {
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

    const tabs = <Tabs id="user_tabs">
      <Tab eventKey={1} title="Reviews">
        <h3> <Glyphicon glyph="pencil" /> Reviews </h3>
        <ReviewList reviewerId={user.id} showEntity={true} showReviewBox={false} />
      </Tab>
      <Tab eventKey={2} title="Ratings">
        <h3> <Glyphicon glyph="star" /> Ratings </h3>
        <RatingList userId={user.id} />
      </Tab>
      {loggedIn && <Tab eventKey={3} title="Bookmarks">
        <h3> <Glyphicon glyph="bookmark" /> Bookmarks </h3>
        <BookmarkList userId={user.id} showEntity={true} />
      </Tab>}
    </Tabs>;

    return (
      <div className="User">
        <Jumbotron>
          <Grid>
            <Col md={2} textLeft>
              <img style={styles.profilePhoto} src={user.photo}
                alt={user.firstName + ' ' + user.lastName} />
            </Col>
            <Col md={10}>
              <h2>
                {`${user.firstName} ${user.lastName} (@${user.username})`}
                <small> user since <TimeStamp date={user.createdAt || Date.now()}/> </small>
              </h2>
            </Col>
          </Grid>
        </Jumbotron>
        <Grid fluid>
          <Col md={3}> {leftSideBar} </Col>
          <Col md={6}> {tabs} </Col>
          <Col md={3}></Col>
        </Grid>
      </div>
    );
  }
}
