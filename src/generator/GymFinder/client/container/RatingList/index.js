import RatingList from '../../layout/RatingList';
import Loader from 'react-loader';

export default class RatingListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, ratings: [] };
  }
  render () {
    return <Loader className="RatingList" loaded={this.state.loaded} radius={50}>
      <RatingList ratings={this.state.ratings} />
    </Loader>;
  }
  componentDidMount () {
    let url = `/ratings.json?`;
    if (this.props.userId) { url += `userId=${this.props.userId}&`; }
    if (this.props.entityId) { url += `entityId=${this.props.entityId}&`; }
    fetch(url)
    .then(r => r.json())
    .then(ratings => {
      this.setState({ ratings, loaded: true, });
    });
  }
}
