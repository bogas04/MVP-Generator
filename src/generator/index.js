const fs = require('fs-extra-promise');
const dir2json = require('jsondir').dir2json;

try {
  const options = require('./options.json');
} catch (e) {
  throw new Error("options.json file not found");
}
dir2json('../app', (err, results) => {
  if (err) throw err;
  delete results.node_modules;
  delete results.web.node_modules;
  console.log(results);
});

//fs.copyAsync('../app', __dirname)
//.then(status => console.log(status))
//.catch(e => console.log(e));

// DONE fs.copy('../app', __dirname)                             // copy skeleton
//.then(() => require('./modifyDatabase')(options.schema)) // generates migration files
//.then(require('./updateServer'))                         // update server APIs
//.then(require('./injectComponents'))                     // replace default components with user defined components
//.then(require('./updateComponents'))                     // update components to consume new API
//.then(() => require('./injectStyle')(options.style))     // add style options chosen by user
//.catch(reportError);


/*
   $ npm i mvpgen -g
   $ mkdir ProjectFolder
   $ cd ProjectFolder
   $ touch options.js
   $ echo "asdasd" >> options.js
   $ mvpgen
   >> json Options file 
   >> [*] copy entire project folder
   >> >> Modify schema (db.js) (INNOVATION)
   >> >> app/server/db/ <- variety/db-mongo
   >> >> app/components/Rating <- {options.components.rating.location}
   ...
   >> final optimizations
   >> "Project ready, do npm start to run server and visit http://localhost:1337"
   >> "Mobile apps are found in apps/iOS and app/Android"

*/
