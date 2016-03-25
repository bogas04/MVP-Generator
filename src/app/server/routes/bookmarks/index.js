export default function bookmarks (Router, db) {
  return Router()
  .get('/', (req, res) => {
    db.models.bookmarks.findAll({ where: req.query || {} })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  .post('/', (req, res) => {
    const { title, entityId, userId } = req.body;
    db.models.bookmarks.create({ title, entityId, userId })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  });
}
