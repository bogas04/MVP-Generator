import SearchBar from '../../layout/SearchBar';
import Filters from '../../layout/Filters';
import Feed from '../../layout/Feed';
import { Grid, Col } from 'react-bootstrap';
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
    return (
      <Grid className="Searc" fluid>
        <h3>Search {keyword.length > 0 && <span>results for <code>{keyword}</code></span>}</h3>
        <Col md={8}>
          <SearchBar value={keyword} />
          <Loader loaded={loaded} radius={50}>
            <Feed items={this.state.results}/>
          </Loader>
        </Col>
        <Col md={4}>
          <Filters onFilter={(...args) => console.log(args)}/>
        </Col>
      </Grid>
    );
  }
  componentDidMount() {
    fetch(`/entity.json?param=q&value=${this.state.keyword}`)
    .then(r => r.json())
    .then(results => {
      this.setState({ results, loaded: true });
    })
    .catch(error => console.log(error));
  }
}
