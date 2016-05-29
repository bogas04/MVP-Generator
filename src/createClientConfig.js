'use strict';

const options = require(`${process.cwd()}/options`);

module.exports = function createClientConfig(input) {
  return `export default {
    APP_NAME: "${input.APP_NAME}",
    GMAPS_KEY: "${input.GMAPS_KEY}",
    URLS: [
      { title: 'About', url: '/about' },
      { title: 'Contact', url: '/contact' },
    ],
    FAVICON: 'http://dogeminer.se/favicon.ico', 
    search: ${JSON.stringify(options.search)},
  }`;
}
