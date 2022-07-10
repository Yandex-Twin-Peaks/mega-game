import express from 'express';
import path from 'path';
import handler from './render';

const app = express();

app.use(express.static(path.resolve(__dirname, '../../public')));

app.use(handler);

app.listen(8080, () => {
  console.log('app is started');
});
