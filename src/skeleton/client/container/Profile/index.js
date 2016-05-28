import User from '../../layout/User';
import Loader from 'react-loader';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {}, loaded: false, };
  }
  componentWillMount() {
    const { username } = this.props.params;
    fetch(`/profile.json/${username}`, { headers: { 'Content-Type': 'application/json'} })
    .then(r => r.json())
    .then(user => this.setState({ user, loaded: true, }))
    .catch(err => console.error(err));
  }
  render() {
    const { user } = this.state;
    return <Loader className="Profile" loaded={this.state.loaded} radius={50}>
      <User user={user} />
    </Loader>;
  }
}
