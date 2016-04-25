import Sequelize from 'sequelize';

module.exports = (Conn) => {
  return Conn.define('entities', {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      }
    },
    cover_photo: Sequelize.STRING,
    profile_photo: Sequelize.STRING,
    location: Sequelize.JSONB,
  });
};
