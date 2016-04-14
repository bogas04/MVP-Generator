'use strict';

module.exports = function createServerConfig(options) {
  //For custom themes, build one using http://pikock.github.io/bootstrap-magic/app/index.html#!/editor and replace the bootstrap.min.css file in app/web/css
  let bootstrap = options.theme === 'default' ? { default: true, } : { bootswatch: options.theme[0] };

  return `export default {
    PORT: 1337,
    DB: {
      SERVER: "${options.db}",
      NAME: "${options.db_name}",
      HOST: "${options.db_host}",
      USER: "${options.db_username}",
      PASSWORD: "${options.db_password}",
    },
    APP_NAME: "${options.APP_NAME}",
    ${JSON.stringify(bootstrap)},
    //TODO
    FAVICON: 'http://dogeminer.se/favicon.ico', 
    //TODO
    search: [],
    PASSWORD_HASH_ROUNDS: 10,
    SERVER_SIDE_RENDERING: false,
    JWT_SECRET: 'QWERTYUIOP~!@#$%^&*()_+ASDFGHJKL:"~!@#$%^&*()_+ZXCVBNM<>?~!@#$%^&*()_+"',
    JWT_EXPIRES_IN: '30 days',
  }`;
}
