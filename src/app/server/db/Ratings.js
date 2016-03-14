import Sequelize from 'sequelize';

module.exports = (Conn) => {
  return Conn.define('ratings', {
    value: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  });
};
