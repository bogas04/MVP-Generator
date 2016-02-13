import express from 'express';
import searchResults from './searchResults';

const app = express();

app.use(express.static(`${__dirname}/../web`));

app.get('/search.json', (req, res) => {
  res.status(200).json(searchResults);
});

app.listen(1337, () => console.log('Server is running') );
