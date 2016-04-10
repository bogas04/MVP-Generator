import Header from '../../layout/Header';
import config from '../../config';
import { connect } from 'react-redux';
import { fetchUser } from '../../flux/actionCreators';

export default connect(s => ({}), {
  fetchUser,
})(
class App extends React.Component {
  constructor(p) {
    super(p);
    this.props.fetchUser();
  }
  render () {
    const { APP_NAME = 'App Name', URLS = [] } = config;
    const { children } = this.props;
    return (
      <div className="App">
        <Header title={APP_NAME} urls={URLS} />
        <article style={{minHeight: '400px'}}>
          {children}
        </article>
      </div>
    );
  }
}
)
