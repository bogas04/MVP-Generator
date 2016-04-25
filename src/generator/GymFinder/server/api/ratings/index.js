import { middlewares } from '../utils';

export default function ratings (Router , db) {
  return Router()
  .get('/', (req, res) => {
    db.models.ratings.findAll({ where: req.query, include: [{ model: db.models.entities }], order: [['createdAt', 'DESC']]})
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  .post('/', middlewares.auth(db), (req, res) => {
    const { value, entityId } = req.body;
    const userId = req.user.id;
    db.models.ratings.create({ value, entityId, userId })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  });
}
