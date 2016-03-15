import express from 'express';
import bodyParser from 'body-parser';
import db from './db';

const app = express();

// TODO: Temp solution for logged in user until passport etc. is used
app.use((req, res, next) => { req.user = { id: 1 }; next(); });

app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); });
app.use(express.static(`${__dirname}/../web`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '25mb' }));

app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs' );

// API Routes
app.get('/entity.json', (req, res) => { 
  db.models.entities.findAll({ where: req.query || {} }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});
app.get('/reviews.json', (req, res) => {
  db.models.reviews.findAll({ where: req.query || {}, order: [['createdAt', 'DESC']] }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});
app.get('/bookmarks.json', (req, res) => {
  db.models.bookmarks.findAll({ where: req.query || {} }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});
app.get('/likes.json', (req, res) => {
  db.models.likes.findAll({ where: req.query || {} }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});
app.get('/ratings.json', (req, res) => {
  db.models.ratings.findAll({ where: req.query || {} }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});

app.post('/ratings.json', (req, res) => {
  // TODO: check req.body for empty
  const { value, entityId, userId } = req.body;
  db.models.ratings.create({ value, entityId, userId }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});
app.post('/bookmarks.json', (req, res) => {
  // TODO: check req.body for empty
  const { title, entityId, userId } = req.body;
  db.models.bookmarks.create({ title, entityId, userId }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});
app.post('/reviews.json', (req, res) => {
  // TODO: check req.body for empty
  const { reviewBody, entityId, userId } = req.body;
  db.models.reviews.create({ reviewBody, entityId, userId }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});
app.post('/likes.json', (req, res) => {
  // TODO: check req.body for empty
  const { entityId, userId } = req.body;
  db.models.likes.create({ entityId, userId }).then(data => res.status(200).json(data)).catch(error => res.status(500).json(error));
});

app.use(require('./react'));
app.listen(1337, () => console.log('Server is running at http://localhost:1337/') );
