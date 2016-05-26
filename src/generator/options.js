'use strict';

const levels = ['primary', 'secondary', 'primary_secondary'];
const streams = ['nonmed', 'med', 'commerce'];

module.exports = {
  // Search by parameters, these will appear in the "Filters" while searching, and the api will use these to allow searching based on these.
  search: [
    { by: 'level', type: 'enum', options: levels, },
    { by: 'twelfth_streams', type: 'enum', options: streams, },
  ],
  // Meta data about entity
  entity: {
    // Attributes of entity that are extra to the default ones
    attributes: [
      { name: 'level', type: 'enum' , options: levels, },
      { name: 'twelfth_streams', type: 'enum', options: streams, },
    ],
  },
};
