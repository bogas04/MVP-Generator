import { connect } from 'react-redux';
import { fetchUser, logout } from '../../flux/actionCreators';
import User from '../../layout/Admin';

export default connect(({user}) => ({user}), {
  //fetchUser,
  logout,
})(
class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    //this.props.fetchUser();
  }
  render() {
    const { user, logout } = this.props;
    return (
      <Admin user={user} loggedIn={true} logout={logout} />
    );
  }
}
)
