import Sequelize from 'sequelize';

module.exports = (Conn) => {
  return Conn.define('reviews', {
    reviewBody: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    images: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    }
  });
};
