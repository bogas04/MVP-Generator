import Sequelize from 'sequelize';

module.exports = (Conn) => {
  return Conn.define('bookmarks', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
}
