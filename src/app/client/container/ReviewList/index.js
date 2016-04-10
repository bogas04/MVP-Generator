import ReviewList from '../../layout/ReviewList';
import ReviewBox from '../../layout/ReviewBox';
import Loader from 'react-loader';

export default class ReviewListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, reviews: [] };
  }
  loadReviews() {
    let url = `/reviews.json?`;
    if (this.props.reviewerId) { url += `reviewerId=${this.props.reviewerId}&`; }
    if (this.props.entityId) { url += `entityId=${this.props.entityId}&`; }
    fetch(url)
    .then(r => r.json())
    .then(reviews => {
      reviews = reviews.length > 0 ? reviews : [];
      this.setState({ reviews, loaded: true, });
    });
  }
  componentDidMount () {
    this.loadReviews();
  }
  render () {
    const { showReviewBox = true, showEntity = false} = this.props;
    return <Loader className="ReviewList" loaded={this.state.loaded} radius={50}>
      {showReviewBox && <ReviewBox entityId={this.props.entityId} onSubmit={() => this.loadReviews()}/>}
      <ReviewList reviews={this.state.reviews} showEntity={showEntity}/>
    </Loader>;
  }
}

