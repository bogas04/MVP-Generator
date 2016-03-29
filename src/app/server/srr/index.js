import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../../components/flux/reducers';
import App from '../../components/container/App';
import config from '../../config';
import routes from '../../components/routes';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

export function template ({ html = '', title = config.APP_NAME, favicon = config.FAVICON, initialState = {} } = {}) {
  return `<!doctype html>
  <html>
  <head>
  <title>${title}</title>
  <meta charset="utf8" />
  <link rel="stylesheet" href="/css/main.css" />
  <link rel="icon" href="${favicon}" type="image/jpeg"/>
  <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.min.css" />
  </head>
  <body>
  <div id="root">${html}</div>
  <script> window.__INITIAL_STATE__ = ${JSON.stringify(initialState)} </script>
  <script src="/bundle.js"></script>
  </body>
  </html>`;
}

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
