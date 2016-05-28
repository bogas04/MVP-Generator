export default {
  APP_NAME: 'Zomato',
  GMAPS_KEY: 'AIzaSyDYek1irsaM7LLfDaYgF7EhSsdKImeHd8c',
  URLS: [
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' },
  ],
  FAVICON: 'http://dogeminer.se/favicon.ico', 
  search: [

    { by: 'trainers', type: '+linear' }, // UI: Gyms that have at least ___ Trainers, Server: where: { "trainers": { $gt: ____ }}
    { by: 'capacity', type: '-linear' }, // UI: Banquet halls that have capacity of at most ___ people, Server: where: { "capacity": { $lt: ____ }}
    { by: 'rating', type: '+linear', }, // overall rating

    { by: 'degree', type: 'string' }, // UI: Doctors that have degrees like %_____%, Server: where: { "degrees": { $like: `%${____}%` }}

    { by: 'category', type: 'enum', options: [
      'maid', 'driver', 'laundry', 'cook', 'gardener', 
    ] }, // UI: Worker have categories of which one (or more) can be used, Server: simple enum operation
 
    // For general search
    //{ by: 'title', type: 'string', }, // title like
    //{ by: 'description', type: 'string', }, // description like
    { by: 'location', type: 'geo', }, // nearness to location
  ],
};
