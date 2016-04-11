export default {
  PORT: 1337,
  DB: {
    SERVER: 'postgres',
    NAME: 'zomato',
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: '!@#$%^&*()_+',
  },
  APP_NAME: 'Zomato',
  PASSWORD_HASH_ROUNDS: 10,
  BOOTSWATCH_THEME: 'flatly',
  SERVER_SIDE_RENDERING: false,
  JWT_SECRET: 'QWERTYUIOP~!@#$%^&*()_+ASDFGHJKL:"~!@#$%^&*()_+ZXCVBNM<>?~!@#$%^&*()_+"',
  JWT_EXPIRES_IN: '30 days',
  FAVICON: 'http://dogeminer.se/favicon.ico', 
  search: [
    // For custom filters
    // { by: 'trainers', type: '+linear' } // UI: Gyms that have at least ___ Trainers, Server: where: { "trainers": { $gt: ____ }}
    // { by: 'capacity', type: '-linear' } // UI: Banquet halls that have capacity of at most ___ people, Server: where: { "capacity": { $lt: ____ }}
    // { by: 'degree', type: 'string' } // UI: Doctors that have degrees like %_____%, Server: where: { "degrees": { $like: `%${____}%` }}

    // Trivial
    { by: 'rating', type: 'linear', }, // overall rating

    // For general search
    { by: 'title', type: 'string', }, // title like
    { by: 'description', type: 'string', }, // description like
    { by: 'location', type: 'geo', }, // nearness to location

    // For quality feed
    { by: 'reviews', type: 'count', }, // count of reviews
    { by: 'bookmarks', type: 'count', }, // count of bookmarks
    { by: 'sentiment', type: 'linear', }, // overall sentiment of reviews
    { by: 'activity', type: 'recency', }, // order by updatedAt, createdAt of reviews, bookmarks and ratings
    { by: 'new', type: 'recency', }, // order by createdAt of entities
  ],
};
