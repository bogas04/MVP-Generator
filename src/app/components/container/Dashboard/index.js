import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser, logout } from '../../flux/actionCreators';
import TimeStamp from 'react-timeago';

export default connect(({user}) => ({user}), {
  fetchUser,
  logout,
})(
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchUser();
  }
  logout() {
    this.props.logout();
  }
  render() {
    const { user } = this.props;
    return (
      <div className="Dashboard">
        <div className="jumbotron">
          <div className="container">
            {`${user.firstName} ${user.lastName} (${user.username})`}, user since <TimeStamp date={user.createdAt}/>
          </div>
        </div>
        <div className="container-fluid">
          <div className="col-md-3">
            <ul>
              <li><button onClick={this.logout.bind(this)} className="btn btn-link">Logout</button></li>
            </ul>
            Email etc and settings pane comes here
          </div>
          <div className="col-md-6">
            Feed comes here
          </div>
          <div className="col-md-3">
            ?
          </div>
        </div>
      </div>
    );
  }
}
)
