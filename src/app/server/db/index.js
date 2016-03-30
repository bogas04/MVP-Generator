import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';

const Conn = new Sequelize('zomato', 'root', '!@#$%^&*()_+', { dialect: 'postgres', logging: false, host: 'localhost', });

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

Users.hasMany(Reviews);       Reviews.belongsTo(Users);
Users.hasMany(Bookmarks);     Bookmarks.belongsTo(Users);
Users.hasMany(Likes);         Likes.belongsTo(Users);
Users.hasMany(Ratings);       Ratings.belongsTo(Users);

/*
Conn.sync({ force: true }).then(() => {
  _.times(10, () => {
    return Entities.create({
      title: Faker.company.companyName(),
      description: Faker.lorem.paragraphs(),
      cover_photo: 'http://lorempixel.com/1440/400/city/',
      profile_photo: 'http://lorempixel.com/400/400/city/',
      rating: new String(Math.random() * 10).slice(0, 3),
      phone: Faker.phone.phoneNumber(),
      email: Faker.internet.email(),
      location: {
        lat: Faker.address.latitude(),
        lon: Faker.address.longitude(),
        zoom: 13,
      },
    })
  });
});
*/

export default Conn;
