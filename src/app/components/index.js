import React from 'react';
import { Router, browserHistory as history} from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './redux/store';
import routes from './routes';

let store = configStore(window.__INITIAL_STATE__);

render(<Provider store={store}>
  <Router history={history} routes={routes} />
</Provider>, document.getElementById('root'));
