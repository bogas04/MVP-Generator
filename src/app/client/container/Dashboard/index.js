import { connect } from 'react-redux';
import { fetchUser, logout } from '../../flux/actionCreators';
import User from '../../layout/User';

export default connect(({user}) => ({user}), {
  fetchUser,
})(
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchUser();
  }
  render() {
    const { user } = this.props;
    return (
      <div className="Dashboard">
        <User user={user} loggedIn={true} />
      </div>
    );
  }
}
)
