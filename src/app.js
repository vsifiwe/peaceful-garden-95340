import express from 'express';
import routes from './routes/routes';
import {} from 'dotenv/config';

const app = express();
const port = process.env.port;

app.use(express.json());

app.use(routes);

app.listen(port);
console.log('App running on Localhost:', port);
