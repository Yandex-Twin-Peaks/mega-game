import express from 'express';
import * as path from 'path';
import hotReload from './hmr';
import { render } from './render';

const isDev = process.env.MODE === 'development';
const PORT = isDev ? 3000 : 8080;
const app = express();

app.use('/assets/', express.static(path.join(__dirname, '/../../assets/')));

if (isDev) {
  app.use(hotReload);
} else {
  app.use(render);
}

app.listen(PORT, () => {
  console.log(`App on http://localhost:${PORT}\n--- ${isDev ? 'DEVELOPER' : 'PRODUCTION'} MODE ---\n`);
});
