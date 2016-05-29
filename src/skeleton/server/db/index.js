import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';
import config from '../config';
import { hashPassword } from '../api/utils';
const { DB } = config;

const Conn = new Sequelize(DB.NAME, DB.USER, DB.PASSWORD, { dialect: DB.SERVER, logging: false, host: DB.HOST, });

// Models
const Entities = require('./Entities')(Conn);
const Users = require('./Users')(Conn);
const Likes = require('./Likes')(Conn);
const Ratings = require('./Ratings')(Conn);
const Bookmarks = require('./Bookmarks')(Conn);
const Reviews = require('./Reviews')(Conn);

// Relations
Entities.hasMany(Reviews);    Reviews.belongsTo(Entities);
Entities.hasMany(Bookmarks);  Bookmarks.belongsTo(Entities);
Entities.hasMany(Likes);      Likes.belongsTo(Entities);
Entities.hasMany(Ratings);    Ratings.belongsTo(Entities);

Users.hasMany(Reviews);       Reviews.belongsTo(Users, { as: 'reviewer' });
Users.hasMany(Bookmarks);     Bookmarks.belongsTo(Users);
Users.hasMany(Likes);         Likes.belongsTo(Users);
Users.hasMany(Ratings);       Ratings.belongsTo(Users);

Conn.sync({ force: true }).then(() => {
  _.times(10, () => {
    return Entities.create({
      title: Faker.company.companyName(),
      description: Faker.lorem.paragraphs(),
      cover_photo: 'http://lorempixel.com/1440/400/city/',
      profile_photo: 'http://lorempixel.com/400/400/city/',
      phone: Faker.phone.phoneNumber(),
      email: Faker.internet.email(),
      location: {
        lat: Faker.address.latitude(),
        lon: Faker.address.longitude(),
        zoom: 13,
      },
    });
  });
  Users.create({ username: 'admin', email: 'admin@gmail.com', firstName: 'Admin', lastName: '', role: 'admin', password: hashPassword('blablabla'), });

  Users.create({ username: 'divjot', email: 'divjot@gmail.com', firstName: 'Divjot', lastName: 'Singh', password: hashPassword('blablabla'), });
  Users.create({ username: 'akanshi', email: 'akanshi@gmail.com', firstName: 'Akanshi', lastName: 'Gupta', password: hashPassword('blablabla'), });
  Users.create({ username: 'chitrasoma', email: 'chitrasoma@gmail.com', firstName: 'Chitrasoma', lastName: 'Singh', password: hashPassword('blablabla'), });
});

export default Conn;
