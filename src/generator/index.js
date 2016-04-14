'use strict';

const getOptions = require('./getOptions');
const copySkeleton = require('./copySkeleton');

getOptions // This can be from any source
.then(copySkeleton) // This happens only in one way right now, however we can zip it!
.then(answers => {
  console.log(`Copied your app to ${answers.APP_NAME}/`);
})
.catch(err => console.log('Oops! ', err))
