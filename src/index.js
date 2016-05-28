#!/usr/bin/env node

'use strict';

console.log('Welcome to MVP Generator 😎 ');
console.log('Make sure you have created `options.js` file as per docs and logos directory with logo of mentioned sizes.')

const getInputs = require('./getInputs');
const copySkeleton = require('./copySkeleton');

getInputs // This can be from any source
.then(copySkeleton) // This happens only in one way right now, however we can zip it!
.then(answers => {
  console.log(`Copied your app to ${answers.APP_NAME}/`);
  console.log(`Install npm dependencies by writing following code
  cd ${answers.APP_NAME}
  npm install
  # Wait for this to complete
  cd web/
  npm install
  # Now your dependencies will be installed
  cd ../
  npm start
  # This will build your server and give you url of your application (local)`);
})
.catch(err => console.log('Oops! ', err))
