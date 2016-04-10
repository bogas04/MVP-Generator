import { Glyphicon, Input, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

export default function SearchBar ({ keyword = '' }) {
  return (
    <form className="SearchBar" role="search" action="/search" method="get">
      <Input type="text" placeholder="Search" defaultValue={keyword} name="q"
        buttonAfter={<Button type="submit"><Glyphicon glyph="search" /> Go</Button>} />
    </form>
  );
}
