import express from 'express';
import bodyParser from 'body-parser';
import api from './api';
import srr, { template } from './srr';
import config from '../config';

const app = express();

// DEBUG
app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

// CONFIG
app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); });
app.use(express.static(`${__dirname}/../web`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '25mb' }));

// API ROUTES
app.use(api(express));

// REACT WEB APP
app.get('*', (req, res) => res.send(template()));

// TODO: SERVER SIDE RENDERING FOR REACT REDUX REACT-ROUTER
//app.use(srr);

// STARTING SERVER
app.listen(config.PORT, () => console.log(`Server is running at http://localhost:${config.PORT}/`));
