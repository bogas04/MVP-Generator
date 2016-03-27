export default function entities (Router , db) {
  return Router()
  .get('/entity.json', (req, res) => { 
    db.models.entities.findAll({ where: req.query || {} })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  });
}
