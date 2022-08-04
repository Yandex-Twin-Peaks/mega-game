import express from 'express';
import path from 'path';
import handler from './render';

const PORT = process.env.PORT || 8080;

const app = express();
const staticDir = path.resolve(__dirname, '../../dist/assets');

app.use('/assets/', express.static(staticDir));
app.use(handler);

app.listen(PORT, () => {
  console.log(`App is started on: http://localhost:${PORT}\nStatic Directory: ${staticDir}`);
});
