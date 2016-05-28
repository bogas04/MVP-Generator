import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../client/flux/reducers';
import App from '../../client/container/App';
import config from '../config';
import routes from '../../client/routes';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import template from '../template';

export default (req, res) => {
  const store = createStore(reducers);
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const initialState = store.getState();

  return res.send(template(html, initialState));

  // TODO: Integrate react-router and redux
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {

      let currentRoute = renderProps.routes.slice(-1)[0].path || 'home';
      currentRoute = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
      let title = `${currentRoute + ' | '} ${config.APP_NAME}`;

      res.send(template({
        html,
        title,
        initialState,
        favicon: config.FAVICON,
      }));

    }
  });
};
