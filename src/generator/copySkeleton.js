'use strict';

const fs = require('fs-extra-promise');
const createClientConfig = require('./createClientConfig');
const createServerConfig = require('./createServerConfig');

module.exports = function copySkeleton (answers) {
  const outputDir = `${__dirname}/${answers.APP_NAME}/`;
  try {
    console.log('Copying skeleton app');
    fs.copySync('../app', outputDir);
    console.log('Injecting config to client code');
    fs.writeFileSync(`${outputDir}client/config.js`, createClientConfig(answers));
    console.log('Injecting config to server code');
    fs.writeFileSync(`${outputDir}server/config.js`, createServerConfig(answers));
    console.log('Cleaning up....');
    return Promise.resolve(answers);
  } catch (err) {
    return Promise.reject(err);
  }
}
