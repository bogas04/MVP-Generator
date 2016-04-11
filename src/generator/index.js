'use strict';
var inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'app_name',
    message: 'Enter the name of your app'
  },
  {
    type: 'input',
    name: 'entity_name',
    message: 'Enter the entity name'
  },
  {
    type: 'checkbox',
    message: 'Select the theme for the app',
    name: 'theme',
    choices: [
      {
        name: 'Flatly'
        //have to see how to set any theme to default
      },
      {
        name: 'Darkly'
      },
      {
        name: 'Theme0'
      },
      {
        name: 'Theme1'
      }
    ],
    validate: function (answer) {
      if (answer.length === 1) {
        return true;
      }
      return 'Choose atmost one theme.';
    }
  },
  {
    type: 'checkbox',
    message: 'Select the database you want to use',
    name: 'db',
    choices: [
      {
        name: 'mysql'
      },
      {
        name: 'postgresql'
      },
      {
        name: 'mongodb'
      },
      {
        name: 'db0'
      }
      //have to add option for others(not available in options)
    ],
    validate: function (answer) {
      if (answer.length === 1) {
        return true;
        //have to see if no option is selected
      }
      return 'Choose atmost one database option';
    }
  },
  {
    type: 'input',
    name: 'logoPath',
    message: 'Enter the path of your logo (__(default./logo.png)_____)'
  },
  {
    type: 'input',
    name: 'entitySchemaPath',
    message: 'Enter the path of schema.js for entity (_(default ./schema.js)_______)',
    }
]).then(function (answers) {
  console.log(JSON.stringify(answers, null, '  '));
});


