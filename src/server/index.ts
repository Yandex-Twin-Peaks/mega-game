import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { dbConnect } from './db/connectSequelize';
import router from './router/router';


const jsonParser = bodyParser.json();

const app = express();


app
  .use(express.static(path.resolve(__dirname, '../../public')))
  .use(jsonParser)
  .use(router);

dbConnect().then(() => {
  const port = 8080;
  app.listen(port, () => {
    console.log(`app is started on localhost:${port}`);
  });
});
