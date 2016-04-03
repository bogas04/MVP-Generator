import { Glyphicon, Button } from 'react-bootstrap';

export default class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bookmarked: this.props.bookmarked || false, };
  }
  toggleState(e) {
    //fetch()
    this.setState({ bookmarked: !this.state.bookmarked });
  }
  render() {
    return (
      <Button className="Bookmark" bsStyle={this.state.bookmarked ? 'danger' : 'default'} onClick={e => this.toggleState(e)}>
        <Glyphicon glyph="bookmark" /> {this.state.bookmarked ? 'Bookmarked' : 'Bookmark'}
      </Button>
    );
  }
}
