import { Link } from 'react-router';
import styles from './styles';
import SearchBar from '../SearchBar';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

export default connect(({user}) => ({user}), {

})(
function Header ({ user, title, urls = [] }) {
  urls = urls.map(url => (
    <LinkContainer to={url.url} key={url.url}>
      <NavItem>{url.title}</NavItem>
    </LinkContainer>
  ));

  return (
    <Navbar inverse staticTop style={styles.navWrapper}>
      <Navbar.Header>
        <Navbar.Brand><Link className="navbar-brand" to="/">{title.toUpperCase()}</Link></Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav> {urls} </Nav>
        <Navbar.Form pullLeft> <SearchBar /> </Navbar.Form>
        <Nav pullRight> <LoginButton user={user} /> </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export function LoginButton ({ user }) {
  return (
    <LinkContainer to={user && user.loggedIn ? '/profile' : 'login'}>
      <NavItem>
        {loginButtonText({ user })}
      </NavItem>
    </LinkContainer>
  );
}
export function loginButtonText ({ user }) {
  return user && user.loggedIn ? `${user.firstName} ${user.lastName}`: `Login`;
}
