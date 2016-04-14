'use strict';

const inquirer = require('inquirer');
const themes = ['default','cerulean','cyborg','flatly','journal','readable','simplex','spacelab','united','cosmo','darkly', 'lumen','paper','sandstone','slate','superhero','yeti', ];
const supportedDBs = ['postgres'];

const choices = {
  themes: themes.map(name => ({ name })),
    dbs: supportedDBs.map(name => ({ name })),
};

const validators = {
  themes(answer) { return answer.length === 1 ? true : 'Choose atmost one theme'; }
  dbs(answer) { return answer.length === 1 ? true : 'Choose one database'; }
};

module.exports = inquirer.prompt([
  { type: 'input', name: 'APP_NAME', message: 'Enter the name of your app' },
  { type: 'input', name: 'entity_name', message: 'Enter the entity name' },
  { type: 'checkbox', message: 'Select the theme for the app', name: 'theme', choices: choices.themes, validate: validators.themes, },
  { type: 'checkbox', message: 'Select the database you want to use', name: 'db', choices: choices.dbs, validate: validators.dbs, },
  { type: 'input', message: 'Enter database name', name: 'db_name', },
  { type: 'input', message: 'Enter database user name', name: 'db_username', },
  { type: 'input', message: 'Enter database password', name: 'db_password', },
  { type: 'input', message: 'Enter database host', name: 'db_host', },
  { type: 'input', name: 'LOGO', message: 'Enter the path of your logo (__(default./logo.png)_____)' },
  { type: 'input', name: 'entitySchemaPath', message: 'Enter the path of schema.js for entity (_(default ./schema.js)_______)', },
  { type: 'input', name: 'GMAPS_KEY', message: 'Enter GMAPs API key for maps support', },
]);
