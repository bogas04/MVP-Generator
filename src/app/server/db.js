import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';

const Conn = new Sequelize('zomato', 'root', '!@#$%^&*()_+', {
  dialect: 'postgres',
  logging: false,
  host: 'localhost',
});

const Entity = Conn.define('entity', {
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
  rating: Sequelize.FLOAT,
  location: Sequelize.JSONB,
});

const User = Conn.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
});

// Relations
//Person.hasMany(Post);
//Post.belongsTo(Person);

Conn.sync({ force: true }).then(() => {
  _.times(10, ()=> {
    return Entity.create({
      title: Faker.company.companyName(),
      description: Faker.lorem.paragraphs(),
      cover_photo: 'http://lorempixel.com/1440/400/city/',
      profile_photo: 'http://lorempixel.com/400/400/city/',
      rating: new String(Math.random() * 10).slice(0, 3),
      phone: Faker.phone.phoneNumber(),
      email: Faker.internet.email(),
      location: {
        lon: Faker.address.longitude(),
        zoom: 13,
        lat: Faker.address.latitude(),
      },
    })
  });
});

export default Conn;
