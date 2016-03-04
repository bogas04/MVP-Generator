import express from 'express';
import db from './db';
import comments from './comments';
import photos from './photos';

const app = express();

app.use(express.static(`${__dirname}/../web`));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs' );

app.get('/search.json', (req, res) => { 
  db.models.entity.findAll({ where: req.query || {} })
  .then(data => res.status(200).json(data))
  .catch(error => res.status(500).json(error));
});
app.get('/comments.json', (req, res) => { res.status(200).json(comments); });
app.get('/photos.json', (req, res) => { res.status(200).json(photos); });

app.use(require('./react'));

app.listen(1337, () => console.log('Server is running at http://localhost:1337/') );
