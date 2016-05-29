import config from './config';

export default function template ({ html = '', title = config.APP_NAME, favicon = config.FAVICON, initialState = {} } = {}) {
  let bootstrap = 'bootstrap/dist/css';
  if (config.bootstrap.bootswatch) {
    bootstrap = `bootswatch/${config.bootstrap.bootswatch}`;
  } else if (config.bootstrap.custom) {
    bootstrap = config.bootstrap.custom;
  }

  return `<!doctype html>
  <html>
  <head>
  <title>${title}</title>
  <meta charset="utf8" />
  <meta name="mobile-web-app-capable" content="yes">
  <link rel="stylesheet" href="/css/main.css" />
  <link rel="icon" href="${favicon}" type="image/jpeg"/>
  <link rel="stylesheet" href="/node_modules/${bootstrap}/bootstrap.min.css" />
  <link rel="stylesheet" href="/node_modules/font-awesome/css/font-awesome.min.css" />
  </head>
  <body>
  <div id="root">${html}</div>
  <script> window.__INITIAL_STATE__ = ${JSON.stringify(initialState)} </script>
  <script src="/bundle.js"></script>
  </body>
  </html>`;
}
