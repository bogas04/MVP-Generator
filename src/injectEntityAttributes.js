'use strict';

const options = require(`${__dirname}/options`);

module.exports = function (answers) {

  let injectedAttributes = options.entity.attributes.map(attr => `${attr.name}: { type: ${types(attr)}, }`).join(`,\n`); 

  return `import Sequelize from 'sequelize';

module.exports = (Conn) => {
  return Conn.define('entities', {
    title: { type: Sequelize.STRING, allowNull: false, },
    description: { type: Sequelize.TEXT, allowNull: false, },
    phone: { type: Sequelize.STRING, allowNull: false, },
    email: { type: Sequelize.STRING, validate: { isEmail: true, } },
    cover_photo: Sequelize.STRING,
    profile_photo: Sequelize.STRING,
    location: Sequelize.JSONB,
    ${injectedAttributes}
  });
};`;
}

function types(attr) {
  switch (attr.type) {
    case 'integer': 
      return 'Sequelize.INTEGER';
    case 'jsonb': 
      return 'Sequelize.JSONB';
    case 'text': 
      return 'Sequelize.TEXT';
    case 'string': 
      return 'Sequelize.STRING';
    case 'enum':
      let options = attr.options.map(e => `'${e}'`).join(', ');
      return `Sequelize.ENUM(${options})`;
  }
}
