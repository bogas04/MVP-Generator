import { connect } from 'react-redux';
import { fetchUser, logout } from '../../flux/actionCreators';
import AdminLayout from '../../layout/Admin';

export default connect(({user}) => ({user}), {
  fetchUser,
  logout,
})(
  class Admin extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <AdminLayout loggedIn={true} {...this.props} />
      );
    }
  }
)
