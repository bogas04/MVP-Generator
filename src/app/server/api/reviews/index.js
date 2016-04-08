import { authMiddleware, uploadMiddleware } from '../utils';
import fs from 'fs-promise';

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
  // TODO
  .delete('/', authMiddleware(db), (req, res) => {
    const { entityId } = req.body;
    const userId = req.user.id;
    db.models.reviews.update({ reviewBody, entityId, userId })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  // TODO
  .put('/', authMiddleware(db), (req, res) => {
    const { reviewBody, entityId } = req.body;
    const userId = req.user.id;
    db.models.reviews.update({ reviewBody, entityId, userId })
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json(error));
  })
  .use(uploadMiddleware().array('images'))
  .post('/', authMiddleware(db), (req, res) => {
    const { reviewBody, images, entityId } = req.body;
    const userId = req.user.id;

    Promise.all(req.files.map(f => fs.rename(`${f.path}`, `${__dirname}/../../../web/img/${f.filename}`)))
    .then((data) => {
      db.models.reviews.create({ reviewBody, entityId, userId, images: req.files.map(f => `/img/${f.filename}`)})
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error));
    }).catch(err => res.status(500).json({ err, message: `Couldn't save the images` }))
  })
}
