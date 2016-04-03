import { connect } from 'react-redux';
import BookmarkList from '../../layout/BookmarkList'; 

export default connect(({ user }) => ({ user }), {

})(
class BookmarkListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
  }
  render() {
    return (
      <BookmarkList entityId={this.props.entityId} bookmarks={this.state.bookmarks} />
    );
  }
  componentDidMount() {
    const url = `/bookmarks.json?userId=${this.props.userId}`;
    const token = localStorage.getItem('token');
    fetch(url, { headers: { token } })
    .then(r => r.json())
    .then(bookmarks => {
      if (bookmarks.length > 0) {
        this.setState({ bookmarks });
      }
    })
    .catch(err => console.error(err));
  }
}
)
