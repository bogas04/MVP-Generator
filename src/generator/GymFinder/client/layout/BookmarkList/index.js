//import TimeStamp from 'react-timeago';
import TimeStamp from '../TimeStamp';
import { Link } from 'react-router';

export default class BookmarkList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bookmarks } = this.props;
    const message = bookmarks.length === 0 ? <h4>No bookmarks made 😓 </h4> : null;
    const bookmarkList = bookmarks.map(bookmark => (
      <li key={bookmark.id}>
        <Link to={`/entity/${bookmark.entity.id}`}>{bookmark.entity.title}</Link> <TimeStamp date={bookmark.createdAt} />
      </li>
    ));

    return (
      <div className="BookmarkList">
        {message}
        <ul> {bookmarkList} </ul>
      </div>
    ); 
  }
}
