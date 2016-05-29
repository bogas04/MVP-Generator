'use strict';

const options = require(`${process.cwd()}/options`);

module.exports = function createServerConfig(input) {
  //For custom themes, build one using http://pikock.github.io/bootstrap-magic/app/index.html#!/editor and replace the bootstrap.min.css file in app/web/css
  let bootstrap = input.theme === 'default' ? { default: true, } : { bootswatch: input.theme[0] };

  return `export default {
    PORT: 1337,
    DB: {
      SERVER: "${input.db}",
      NAME: "${input.db_name}",
      HOST: "${input.db_host}",
      USER: "${input.db_username}",
      PASSWORD: "${input.db_password}",
    },
    APP_NAME: "${input.APP_NAME}",
    bootstrap: ${JSON.stringify(bootstrap)},
    search: ${JSON.stringify(options.search)},
    //TODO
    FAVICON: 'http://dogeminer.se/favicon.ico', 
    PASSWORD_HASH_ROUNDS: 10,
    SERVER_SIDE_RENDERING: false,
    JWT_SECRET: 'QWERTYUIOP~!@#$%^&*()_+ASDFGHJKL:"~!@#$%^&*()_+ZXCVBNM<>?~!@#$%^&*()_+"',
    JWT_EXPIRES_IN: '30 days',
  }`;
}
