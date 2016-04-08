//import TimeStamp from 'react-timeago';
import TimeStamp from '../TimeStamp';
import { Link } from 'react-router';

export default class BookmarkList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const bookmarks = this.props.bookmarks.map(bookmark => (
      <li key={bookmark.id}>
        <Link to={`/entity/${bookmark.entity.id}`}>{bookmark.entity.title}</Link> <TimeStamp date={bookmark.createdAt} />
      </li>
    ));

    return (
      <div className="BookmarkList">
        <ul> {bookmarks} </ul>
      </div>
    ); 
  }
}
