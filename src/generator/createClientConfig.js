'use strict';

module.exports = function createClientConfig(options) {
  return `export default {
    APP_NAME: "${options.APP_NAME}",
    GMAPS_KEY: "${options.GMAPS_KEY}",
    URLS: [
      { title: 'About', url: '/about' },
      { title: 'Contact', url: '/contact' },
    ],
    //TODO
    FAVICON: 'http://dogeminer.se/favicon.ico', 
    //TODO
    search: [],
  }`;
}
