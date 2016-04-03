import { Glyphicon, Input, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
//import { searchKeyword } from '../../flux/actionCreators';

//export default connect(({ keyword }) => ({ keyword }), {
  //searchKeyword,
//})(
export default function SearchBar ({ keyword = '', searchKeyword }) {
  return (
    <form onSubmit={e => { searchKeyword(e.currentTarget.value); }}className="SearchBar" role="search" action="/search" method="get">
      <Input type="text" placeholder="Search" defaultValue={keyword} name="q"
        buttonAfter={<Button type="submit"><Glyphicon glyph="search" /> Go</Button>} />
    </form>
  );
}
//)
