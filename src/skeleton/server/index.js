import express from 'express';
import bodyParser from 'body-parser';
import api from './api';
import template from './template';
import config from './config';

const app = express();

// DEBUG
app.use((req, res, next) => { console.log(`${req.method} ${req.url}`); next(); });

// CONFIG
app.use((req, res, next) => { res.header("Access-Control-Allow-Origin", "*"); next(); });
app.use(express.static(`${__dirname}/../web`));
app.use(bodyParser.json({ limit: '25mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// API ROUTES
app.use(api(express));

// SERVE REACT WEB APP
app.get('*', (req, res) => res.send(template()));

//config.SERVER_SIDE_RENDERING ? app.get('*', (req, { send }) => send(template())) : app.use(srr);

// STARTING SERVER
app.listen(config.PORT, () => console.log(`Server is running at http://localhost:${config.PORT}/`));
