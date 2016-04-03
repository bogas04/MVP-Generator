import styles from './styles';
import StarRating from 'react-star-rating-component';
import { connect } from 'react-redux';

export default connect(({user}) => ({ userId: user.id, loggedIn: user.loggedIn }), {

})(
class Rating extends React.Component {
  constructor(p) {
    super(p);
    this.state = { value: this.props.value, message: '' };
  }
  render() {
    const { loggedIn = false, editing = false, color = 'inherit'} = this.props;
    return (
      <span>
        <StarRating style={{margin: '0 0 -7px 0', color}} editing={editing || loggedIn} className="Rating" name={`Rating`}
          value={this.state.value} onStarClick={this.handleClick.bind(this)} />
        <span style={{color}}>{this.state.message + ' ' + this.state.value}</span>
      </span>
    );
  }
  componentDidMount() {
    if (this.props.loggedIn) {
      const { userId, entityId, value } = this.props;
      fetch(`/ratings.json?userId=${userId}&entityId=${entityId}`,{ headers: { 'Content-Type': 'application/json', }})
      .then(r => r.json())
      .then(r => Promise.resolve(r.length === 1 ? { value: r[0].value, message: 'Your Rating:'} : { value, message: '' }))
      .then(({value, message}) => this.setState({ value, message }))
      .catch(e => console.error(e));
    }
  }
  handleClick(value) {
    if (this.props.loggedIn) {
      const { entityId } = this.props;
      const token = localStorage.getItem('token');

      fetch(`/ratings.json`,{
        method: 'post',
        headers: { token, 'Content-Type': 'application/json', },
        body: JSON.stringify({ value, entityId, })
      })
      .then(r => r.json())
      .then(({value}) => this.setState({ value, message: `Your Rating: ` }))
      .catch(e => console.error(e));
    }
  }
}
)
