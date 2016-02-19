import React from 'react';
import routes from '../../components/routes';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

module.exports = (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      let currentRoute = renderProps.routes.slice(-1)[0].path || 'home';
      currentRoute = currentRoute.charAt(0).toUpperCase() + currentRoute.slice(1);
      let title = `${currentRoute + ' | '}Chef's Basket`;
      res.render('index.ejs', { title, reactOutput: renderToString(<RouterContext {...renderProps} />)});
    }
  });
};
