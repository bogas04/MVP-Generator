import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import config from '../config';

const app = express();

// DEBUG
app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

// CONFIG
app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); });
app.use(express.static(`${__dirname}/../web`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '25mb' }));
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs' );

// ROUTES
app.use(routes(express));

// STARTING SERVER
app.listen(config.PORT, () => console.log(`Server is running at http://localhost:${config.PORT}/`));
