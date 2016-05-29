import config from '../../config';
import { middlewares, saveFilesAs, deleteFilesAs } from '../utils';
import sequelize from 'sequelize';

export default function entities (Router , db) {
  return Router()
    .get('/entity.json', (req, res) => { 

      //db.models.entities.findAll({
      //include: [
      //{ model: db.models.ratings, attributes: [ [db.col('value')] ]}
      //]
      //}).then(E => console.log(E));

      //db.query(
      //`SELECT "e"."id", title, description, phone, email, cover_photo,
      //profile_photo, location, "e"."createdAt", "e"."updatedAt", avg(ratings.rating)
      //FROM entities LEFT OUTER JOIN ratings on (ratings.entityId = entities.id)
      //`
      //)

      let clause = {};

      const { param, value, limit = 10, offset = 0 } = req.query;

      //const possibleParams = ['id', 'q', 'recent', ...config.search.map(e => e.by)];

      clause = entityBy(param, value, limit, offset);

      db.models.entities.findAll(clause)
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json(error));
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

const entityBy = (param, value, limit = 10, offset = 0) => {
  if (typeof param === 'undefined') {
    return { limit, offset };
  }

  let clauseCreators = {
    id: id => ({ where: { id, }, }),
    q: q => ({ where: { title: { $like: `%${q}%` }, }, }),
    recent: by => ({ where: { createdAt: { $gt: new Date(new Date() - by) } } }),
  };
  config.search.forEach(filter => clauseCreators[filter.by] = createClause(filter));

  return { ...clauseCreators[param](value), limit, offset };
}

const createClause = filter => value => {
  let clause = { where: {} };
  switch(filter.type) {
    case '+linear':
      clause.where[filter.by] = { $gt: value };
    break;
  case '-linear':
    clause.where[filter.by] = { $lt: value };
  break;
case 'string':
  clause.where[filter.by] = { $like: `%${value}%` };
break;
    case 'enum':
      clause.where[filter.by] = value;
    break;
  }
  return clause;
}
