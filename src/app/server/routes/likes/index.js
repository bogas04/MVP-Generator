export default function likes (Router , db) {
  return Router()
  .get('/', (req, res) => {
    db.models.likes.findAll({ where: req.query || {} })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  .post('/', (req, res) => {
    const { entityId, userId } = req.body;
    db.models.likes.create({ entityId, userId })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  });
}
