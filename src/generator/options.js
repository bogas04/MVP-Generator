'use strict';

const equipments = ['tredmil', 'leg press', 'leg extension', 'cycle', 'arc runner', ];

module.exports = {
  search: [
    { by: 'trainers', type: '+linear' },
    { by: 'description', type: 'string' },
    { by: 'equipments', type: 'enum', options: equipments },
  ],
  entity: {
    attributes: [
      { name: 'trainers', type: 'integer' },
      { name: 'equipments', type: 'enum', options: equipments },
    ],
  },
};
