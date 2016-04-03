import Rating from '../Entity/Rating';
import TimeStamp from 'react-timeago';

export default class RatingList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ratings } = this.props;
    // TODO: Once unique ratings are saved per user per entity, remove Math.random()
    return (
      <div className="RatingList">
        {ratings.map(({value, entity, createdAt}) => (
          <div key={value + entity.title + Math.random()}>
            <Rating editing={false} value={value} /> for {entity.title} <TimeStamp date={createdAt} />
          </div>
          ))
        }
      </div>
    );
  }
}
