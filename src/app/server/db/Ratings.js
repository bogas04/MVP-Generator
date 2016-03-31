import Sequelize from 'sequelize';

// TODO: Make sure a user can rate an entity only once
module.exports = (Conn) => {
  return Conn.define('ratings', {
    value: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  });
};
