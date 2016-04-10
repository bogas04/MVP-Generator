import Sequelize from 'sequelize';

module.exports = (Conn) => {
  return Conn.define('users', {
    username: {
      type: Sequelize.STRING,
      unique: true,
    },
    role: {
      defaultValue: 'normal',
      type: Sequelize.ENUM('normal', // Creation - signup.
                           'admin', // Creation - app build time. Can do anything
                           'owner', // Creation - by admin. Can create entity
                           'data_entry') // Creation - by admin. Can add entities
    },
    photo: {
      type: Sequelize.STRING,
      defaultValue: '/img_assets/default_profile_image.png',
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: { isEmail: true },
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
    },
  });
};
