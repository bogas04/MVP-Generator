import Header from '../../layout/Header';
import config from '../../../config';

export default class App extends React.Component {
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
