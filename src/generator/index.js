'use strict';

const fs = require ('fs');

export default (options = {}) => {
  fs.copy('../app', __dirname)                             // copy skeleton
  .then(() => require('./modifyDatabase')(options.schema)) // generates migration files
  .then(require('./updateServer'))                         // update server APIs
  .then(require('./injectComponents'))                     // replace default components with user defined components
  .then(require('./updateComponents'))                     // update components to consume new API
  .then(() => require('./injectStyle')(options.style))     // add style options chosen by user
  .catch(reportError);
};
