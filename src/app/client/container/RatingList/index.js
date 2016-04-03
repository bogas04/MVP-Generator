import RatingList from '../../layout/RatingList';

export default class RatingListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ratings: [] };
  }
  loadRatings() {
    let url = `/ratings.json?`;
    if (this.props.userId) { url += `userId=${this.props.userId}&`; }
    if (this.props.entityId) { url += `entityId=${this.props.entityId}&`; }
    fetch(url)
    .then(r => r.json())
    .then(ratings => {
      if (ratings.length > 0) {
        this.setState({ ratings });
      }
    });
  }
  componentDidMount () {
    this.loadRatings();
  }
  render () {
    return <RatingList ratings={this.state.ratings} />;
  }
}
