import User from '../../layout/User';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: {} };
  }
  componentWillMount() {
    const { username } = this.props.params;
    fetch(`/profile.json/${username}`, { headers: { 'Content-Type': 'application/json'} })
    .then(r => r.json())
    .then(user => this.setState({ user }))
    .catch(err => console.error(err));
  }
  render() {
    const { user } = this.state;
    return (
      <div className="Profile">
        <User user={user} />
      </div>
    );
  }
}
