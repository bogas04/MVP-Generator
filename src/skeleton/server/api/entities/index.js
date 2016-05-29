import config from '../../config';
import { middlewares, saveFilesAs, deleteFilesAs } from '../utils';
import sequelize from 'sequelize';

export default function entities (Router , db) {
  return Router()
    .get('/entity.json', (req, res) => { 
      if(Object.keys(req.query).length === 0 && req.query.constructor === Object) {
        db.models.entities.findAll().then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
      } else { // Some Query
        const { keyword = '', id = -1, limit, offset, q = '' } = req.query;

        if(id !== -1) { // Id
          db.models.entities.find({ where: { id } })
            .then(data => res.status(200).json(data))
            .catch(error => res.status(500).json(error));
        } else { // General Search
          let where = {};

          if(isValidQuery(q)) { where = {...createClause(sanitizeFilters(q))}; }
          if(keyword !== '') { where.title = { $like: `%${keyword}%` } }

          console.log(where);
          db.models.entities.findAll({ where })
            .then(data => res.status(200).json(data))
            .catch(error => res.status(500).json(error));
        }
      }
    })
    .use(middlewares.upload().fields([{ name: 'cover_photo', maxCount: 1 }, { name: 'profile_photo', maxCount: 1 }]))
    .post('/entity.json', middlewares.auth(db, 'admin'), (req, res) => {

      req.body.location = JSON.parse(req.body.location);
      req.files = [req.files.cover_photo[0], req.files.profile_photo[0]];

      saveFilesAs(req.files)
        .then(db.models.entities.create({
        ...req.body,
        cover_photo: `/img/${req.files[0].filename}`,
        profile_photo: `/img/${req.files[1].filename}`
        }))
        .then(data => res.status(200).json({ message: 'Entity saved', data }))
        .catch(err => res.status(500).json({ message: 'Error in saving entity', err }));
    })
}

const createClause = (filters) => {
  let where = {};

  Object.keys(filters).forEach(by => {
    let filter = filters[by];
    switch(filter.type) {
      case 'enum': where[by] = filter.value; break;
      case 'linear': case '+linear': where[by] = { $gt: filter.value }; break;
      case '-linear': where[by] = { $lt: filter.value }; break;
      case 'string': where[by] = { $like: `%${filter.value}%` }; break;
    }
  });
  return where;
}
const sanitizeFilters = filters => {
  filters = JSON.parse(JSON.parse(filters));
  filters = Object.keys(filters)
    .filter(key => filters[key].value !== '')
    .reduce((currentFilters, key) => { currentFilters[key] = filters[key]; return currentFilters; }, {});
  return filters;
};

const isValidQuery = q => !(q === 'undefined' || q === '' || q === 'null');
