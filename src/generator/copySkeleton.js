'use strict';

const fs = require('fs-extra-promise');
const createClientConfig = require('./createClientConfig');
const createServerConfig = require('./createServerConfig');
const injectEntityAttributes = require('./injectEntityAttributes');

module.exports = function copySkeleton (answers) {
  const outputDir = `${__dirname}/${answers.APP_NAME}/`;
  try {
    console.log('Copying skeleton app');
    fs.copySync('../app', outputDir);
    console.log('Injecting config to client code');
    fs.writeFileSync(`${outputDir}client/config.js`, createClientConfig(answers));
    console.log('Injecting config to server code');
    fs.writeFileSync(`${outputDir}server/config.js`, createServerConfig(answers));
    console.log('Updating schema as per options.js');
    fs.writeFileSync(`${outputDir}server/db/Entities.js`, injectEntityAttributes(answers));
    console.log('Cleaning up....');
    return Promise.resolve(answers);
  } catch (err) {
    return Promise.reject(err);
  }
}

// Make code clean, using promises.
//return copySkeleton.then(createClientConfig).then(createServerConfig).then(injectEntityAttributes).then(cleanup);
