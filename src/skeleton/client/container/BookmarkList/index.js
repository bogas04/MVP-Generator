import { connect } from 'react-redux';
import BookmarkList from '../../layout/BookmarkList'; 
import Loader from 'react-loader';

export default connect(({ user }) => ({ user }), {

})(
class BookmarkListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      bookmarks: []
    };
  }
  render() {
    return <Loader loaded={this.state.loaded} radius={50}>
      <BookmarkList entityId={this.props.entityId} bookmarks={this.state.bookmarks} />
    </Loader>;
  }
  componentDidMount() {
    const url = `/bookmarks.json?userId=${this.props.userId}`;
    const token = localStorage.getItem('token');
    fetch(url, { headers: { token } })
    .then(r => r.json())
    .then(bookmarks => {
      this.setState({ bookmarks, loaded: true, });
    })
    .catch(err => console.error(err));
  }
}
)
