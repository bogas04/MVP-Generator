export default function reviews (Router , db) {
  return Router()
  .get('/', (req, res) => {
    db.models.reviews.findAll({
      where: req.query,
      order: [['createdAt', 'DESC']],
      include: [{ model: db.models.users, },{ model: db.models.entities, }],
    })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  .post('/', (req, res) => {
    const { reviewBody, entityId, userId } = req.body;
    db.models.reviews.create({ reviewBody, entityId, userId })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  });
}
