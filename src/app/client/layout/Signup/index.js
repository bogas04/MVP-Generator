import { Row, Col, Grid, Input, Button } from 'react-bootstrap';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }
  render() {
    return (
      <Grid className="Signup" fluid>
        <h1> Signup </h1>
        <form onSubmit={e => this.submit(e)}>
          {this.state.message.length > 0 && <div className="alert">{this.state.message}</div>}
          <Row>
            <Col md={6}><Input label="First Name" name="firstName" type="text" placeholder="Enter your first name" /></Col>
            <Col md={6}><Input label="Last Name" name="lastName" type="text" placeholder="Enter your last name" /></Col>
          </Row>
          <Input label="Username"
            onChange={e => this.checkUsername(e.currentTarget.value)} name="username" type="text" placeholder="Enter username" />
          <Input label="Email"
            onChange={e => this.checkEmail(e.currentTarget.value)} name="email" type="email" placeholder="Enter your email" />
          <Row>
            <Col md={6}><Input label="Password" name="password" type="password" placeholder="Enter your password" /></Col>
            <Col md={6}><Input label="Last Name" name="confirmPassword" type="password" placeholder="Re-enter your password" /></Col>
          </Row>
          <Button type="submit" bsStyle="default">Sign me up!</Button>
        </form>
      </Grid>
    );
  }
  checkEmail(email) {

  }
  checkUsername(username) {

  }
  submit(e) {
    e.preventDefault();
    const $el = e.currentTarget;
    const body = JSON.stringify({
      username: $el.querySelector('[name=username]').value,
      email: $el.querySelector('[name=email]').value,
      firstName: $el.querySelector('[name=firstName]').value,
      lastName: $el.querySelector('[name=lastName]').value,
      password: $el.querySelector('[name=password]').value,
      confirmPassword: $el.querySelector('[name=confirmPassword]').value,
    });
    fetch('/signup.json', {
      headers: { 'Content-Type': 'application/json', }, method: 'post', body,
    })
    .then(r => r.json())
    .then(({ message }) => {
      this.setState({ message });
    })
    .catch(e => {
      this.setState({ message });
      console.error(e)
    });
  }
}
