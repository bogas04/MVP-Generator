import { middlewares, deleteFilesAs, saveFilesAs } from '../utils';

export default function reviews (Router , db) {
  return Router()
  .get('/', (req, res) => {
    db.models.reviews.findAll({
      where: req.query,
      order: [['createdAt', 'DESC']],
      include: [{ model: db.models.users, as: 'reviewer' },{ model: db.models.entities, }],
    })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  .delete('/', middlewares.auth(db), (req, res) => {
    const { entityId, id } = req.body;
    const reviewerId = req.user.id;
    db.models.reviews.destroy({ where: { id, entityId, reviewerId } })
    // TODO: Remove all review images associated with the review
    .then(data => deleteFilesAs(data.images).then($ => Promise.resolve(data)))
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  .put('/', middlewares.auth(db), (req, res) => {
    const { reviewBody, entityId, id } = req.body;
    const reviewerId = req.user.id;
    db.models.reviews.update({ reviewBody }, { where: { id, entityId, reviewerId } })
    .then(data => data[0] === 1 ? res.status(200).json(data[1]) : Promise.reject({ message: 'No such review found' }))
    .catch(error => res.status(500).json(error));
  })
  .use(middlewares.upload().array('images'))
  .post('/', middlewares.auth(db), (req, res) => {
    const { reviewBody, images, entityId } = req.body;
    const reviewerId = req.user.id;

    saveFilesAs(req.files)
    .then((data) => {
      db.models.reviews.create({ reviewBody, entityId, reviewerId, images: req.files.map(f => `/img/${f.filename}`)})
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
    }).catch(err => res.status(500).json({ err, message: `Couldn't save the images` }))
  })
}
