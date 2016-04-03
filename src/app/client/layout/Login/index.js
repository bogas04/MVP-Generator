import { Link } from 'react-router';
import { login } from '../../flux/actionCreators';
import { connect } from 'react-redux';
import { Alert, Grid, Button, Input } from 'react-bootstrap';

// Closest to decorator syntax @connect
export default connect(
  ({ user }) => ({ user }),
    { login }
)(
class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { loggedIn = null } = this.props.user;
    let alert  = <div></div>;
    if (loggedIn !== null) { alert = <Alert bsStyle="warning">{loggedIn ? 'Logged in!' : 'Error!'}</Alert>; }
    return (
      <Grid fluid className="Login">
        <h1>Login</h1>
        {alert}
        <form action="login" method="post" onSubmit={e => this.submit(e)}>
          <Input label="Email" type="email" name="email" placeholder="e.g. jane@doe.com" />
          <Input label="Password" type="password" name="password" placeholder="Enter your password" />
          <Button type="submit" bsStyle="primary">Login</Button> <Link to="/signup"><Button bsStyle="default">Create account</Button></Link>
        </form>
      </Grid>
    );
  }
  submit(e) {
    e.preventDefault();
    let $el = e.currentTarget;
    const email = $el.querySelector('[name=email]').value;
    const password = $el.querySelector('[name=password]').value;
    const { login } = this.props;

    login({ email, password });
  }
}
)
