import SearchBar from '../../layout/SearchBar';
import Filters from '../../layout/Filters';
import Feed from '../../layout/Feed';
import { Accordion, Panel, Grid, Col } from 'react-bootstrap';
import Loader from 'react-loader';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    const { q, keyword } = this.props.location.query;
    this.state = { q, loaded: false, results: [], keyword, offset: 0, };
  }
  render() {
    const { results, loaded, keyword = ""} = this.state;
    return (
      <Grid className="Search" fluid>
        <h3>Search {keyword.length > 0 && <span>results for <code>{keyword}</code></span>}</h3>
        <Col md={8}>
          <SearchBar value={keyword} />
          <Loader loaded={loaded} radius={50}>
            <Feed items={this.state.results}/>
          </Loader>
        </Col>
        <Col md={4}>
          <Accordion className="Filters">
            <Panel header="Filters" eventKey="1">
              <Filters onFilter={this.search.bind(this)}/>
            </Panel>
          </Accordion>
        </Col>
      </Grid>
    );
  }
  search(url = `/entity.json?q=${JSON.stringify(this.state.q)}&limit=10&offset=${this.state.offset}&keyword=${this.state.keyword}`) {
    fetch(url)
      .then(r => r.json())
      .then(results => {
        this.setState({ results, loaded: true });
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.search();
  }
}
