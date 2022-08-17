import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { dbConnect } from './db/connectSequelize';
import router from './router/router';
import hotReload from './hmr';
import { render } from './render';

const jsonParser = bodyParser.json();
const isDev = process.env.MODE === 'development';
const PORT = isDev ? 3000 : process.env.MG_PORT || 8080;
const app = express();

app
  .use('/assets/', express.static(path.join(__dirname, '/../../assets/')))
  .use(jsonParser)
  .use(router);

if (isDev) {
  app.use(hotReload);
} else {
  app.use(render);
}

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`App on http://localhost:${PORT}\n--- ${isDev ? 'DEVELOPER' : 'PRODUCTION'} MODE ---\n`);
  });
});
