import Rating from '../Entity/Rating';
//import TimeStamp from 'react-timeago';
import TimeStamp from '../TimeStamp';

export default class RatingList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { ratings } = this.props;
    const message = ratings.length === 0 ? <h4>No ratings made 😓 </h4> : null;
    // TODO: Once unique ratings are saved per user per entity, remove Math.random()
    return (
      <div className="RatingList">
        {message}

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
