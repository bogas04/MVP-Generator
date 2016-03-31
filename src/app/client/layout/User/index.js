import React, { Component } from 'react';
import { logout } from '../../flux/actionCreators';
import TimeStamp from 'react-timeago';
import ReviewList from '../../container/ReviewList';
import { connect } from 'react-redux';
import styles from './styles';

export default connect(state => ({}), {
  logout
})(
class User extends Component {
  render () {
    const { user, loggedIn} = this.props;
    let leftSideBar = <div />;
    if(loggedIn) {
      leftSideBar = <div>
        <h3><span className="glyphicon glyphicon-cog" /> Settings</h3>
        <ul style={{listStyle: 'none'}}>
          <li><button onClick={this.props.logout} className="btn btn-link">
              <span className="glyphicon glyphicon-log-out" /> Logout
          </button></li>
        </ul>
      </div>;
    }
    return (
      <div className="User">
        <div className="jumbotron">
          <div className="container">
            <div className="col-md-2 text-left">
              <img style={styles.profilePhoto} src={user.photo || '/img_assets/default_profile_image.png'}
                alt={user.firstName + ' ' + user.lastName} />
            </div>
            <div className="col-md-10">
              <h2>
                {`${user.firstName} ${user.lastName} (${user.username})`}
                <small> user since <TimeStamp date={user.createdAt || Date.now()}/> </small>
              </h2>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-md-3">
            {leftSideBar}
          </div>
          <div className="col-md-6">
            <h3><span className="glyphicon glyphicon-transfer" /> Activity</h3>
            <ReviewList userId={user.id} showEntity={true} showReviewBox={false} />
          </div>
          <div className="col-md-3">
          </div>
        </div>
      </div>
    );
  }
}
)
