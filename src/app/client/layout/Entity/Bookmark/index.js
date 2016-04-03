import { Glyphicon, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

export default connect(({user}) => ({ userId: user.id, loggedIn: user.loggedIn }), {

})(
class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarked: this.props.bookmarked || false, };
  }
  render() {
    return (
      <Button className="Bookmark" bsStyle={this.state.bookmarked ? 'danger' : 'default'} onClick={this.handleClick.bind(this)}>
        <Glyphicon glyph="bookmark" /> {this.state.bookmarked ? 'Bookmarked' : 'Bookmark'}
      </Button>
    );
  }
  componentWillMount() {
    if (this.props.loggedIn) {
      const { entityId } = this.props;
      const token = localStorage.getItem('token');

      fetch(`/bookmarks.json?entityId=${entityId}`,{ method: 'get', headers: { token, 'Content-Type': 'application/json', }, })
      .then(r => r.json())
      .then(data => {
        if (data.length !== 0) this.setState({ bookmarked: true });
      })
      .catch(err => console.error(err));
    }
  }
  handleClick() {
    if (this.props.loggedIn) {
      const { entityId } = this.props;
      const token = localStorage.getItem('token');

      fetch(`/bookmarks.json`,{
        method: this.state.bookmarked ? 'delete': 'post',
        headers: { token, 'Content-Type': 'application/json', },
        body: JSON.stringify({ entityId, })
      })
      .then(r => r.json())
      .then((data) => { this.setState({ bookmarked: !this.state.bookmarked }) })
      .catch(e => console.error(e));
    }
  }
}
)
