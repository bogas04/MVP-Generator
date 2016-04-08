import Item from '../../layout/SearchItem';
import SearchBar from '../../layout/SearchBar';
import { Grid } from 'react-bootstrap';
import Loader from 'react-loader';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      results: [],
      keyword: this.props.location.query.q
    };
  }
  render() {
    const { results, loaded, keyword } = this.state;
    const searchResults = results.length > 0 ? results.map(r => <Item key={r.title} {...r} />) : <h4> No results found 😓;</h4>;
    return (
      <Grid className="Searc" fluid>
        <h3> Search results for <code>{keyword}</code> </h3>
        <SearchBar value={keyword} />
        <Loader loaded={loaded} radius={50}>
          {searchResults}
        </Loader>
      </Grid>
    );
  }
  componentDidMount() {
    fetch('/entity.json')
    .then(r => r.json())
    .then(results => {
      this.setState({ results, loaded: true });
    })
    .catch(error => console.log(error));
  }
}
