import express from 'express';
import searchResults from './searchResults';
import comments from './comments';
import photos from './photos';

const app = express();

app.use(express.static(`${__dirname}/../web`));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs' );

app.get('/search.json', (req, res) => { res.status(200).json(searchResults); });
app.get('/comments.json', (req, res) => { res.status(200).json(comments); });
app.get('/photos.json', (req, res) => { res.status(200).json(photos); });

app.use(require('./react'));

app.listen(1337, () => console.log('Server is running at 1337') );
