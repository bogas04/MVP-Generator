import Item from '../../layout/SearchItem';
import SearchBar from '../../layout/SearchBar';
import { Grid } from 'react-bootstrap';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      keyword: this.props.location.query.q
    };
  }
  render() {
    const results = this.state.results.map(r => <Item key={r.title} {...r} />);
    return (
      <Grid className="Searc" fluid>
        <h3> Search results for <code>{this.state.keyword}</code> </h3>
        <SearchBar value={this.state.keyword} />
        <article>
          {results}
        </article>
      </Grid>
    );
  }
  componentDidMount() {
    fetch('/entity.json')
    .then(r => r.json())
    .then(results => {
      this.setState({ results });
    })
    .catch(error => console.log(error));
  }
}
