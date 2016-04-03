import { logout } from '../../flux/actionCreators';
import TimeStamp from 'react-timeago';
import { Grid, Col, Jumbotron, Nav, NavItem, Glyphicon, Tabs, Tab } from 'react-bootstrap';
import ReviewList from '../../container/ReviewList';
import RatingList from '../../container/RatingList';
import BookmarkList from '../../container/BookmarkList';
import { connect } from 'react-redux';
import styles from './styles';

export default connect(state => ({}), {
  logout
})(
class User extends React.Component {
  render () {
    const { user, loggedIn} = this.props;
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
      <Tab eventKey={1} title="Reviews">
        <h3> Reviews </h3>
        <ReviewList userId={user.id} showEntity={true} showReviewBox={false} />
      </Tab>
      <Tab eventKey={2} title="Ratings">
        <h3> Ratings </h3>
        <RatingList userId={user.id} />
      </Tab>
      {loggedIn && <Tab eventKey={3} title="Bookmarks">
        <h3> Bookmarks </h3>
        <BookmarkList userId={user.id} showEntity={true} />
      </Tab>}
    </Tabs>;

    return (
      <div className="User">
        <Jumbotron>
          <Grid>
            <Col md={2} textLeft>
              <img style={styles.profilePhoto} src={user.photo || '/img_assets/default_profile_image.png'}
                alt={user.firstName + ' ' + user.lastName} />
            </Col>
            <Col md={10}>
              <h2>
                {`${user.firstName} ${user.lastName} (${user.username})`}
                <small> user since <TimeStamp date={user.createdAt || Date.now()}/> </small>
              </h2>
            </Col>
          </Grid>
        </Jumbotron>
        <Grid fluid>
          <Col md={3}> {leftSideBar} </Col>
          <Col md={6}> {tabs} </Col>
          <Col md={3}> ???? </Col>
        </Grid>
      </div>
    );
  }
}
)
