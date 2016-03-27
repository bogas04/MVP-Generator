export default function ratings (Router , db) {
  return Router()
  .get('/', (req, res) => {
    db.models.ratings.findAll({ where: req.query || {} })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  .post('/', (req, res) => {
    const { value, entityId, userId } = req.body;
    db.models.ratings.create({ value, entityId, userId })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  });
}
