module.exports = (params) => `<!doctype html>
<html>
  <head>
    <title>${params.title}</title>
    <meta charset="utf8" />
  </head>
  <body>
    <div id="root">
    </div>
  </body>
  <script src="bundle.js"></script>
</html>
`;
