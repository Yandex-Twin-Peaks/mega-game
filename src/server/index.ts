import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
// import handler from './render';
import { dbConnect } from './db/connectSequelize';
// import themesRouter from './router/themeRoutes';
import router from './router/router';


const jsonParser = bodyParser.json();

const app = express();


app
  .use(express.static(path.resolve(__dirname, '../../public')))
  // .use(handler)
  .use(jsonParser)
  .use(router);
// router.use('/theme', router);

// // @ts-ignore
// app.get('/', (req:any, res:any) => {
//   res.json({ message: 'приложение' });
// });

dbConnect().then(() => {
  const port = 8080;
  app.listen(port, () => {
    console.log(`app is started on localhost:${port}`);
  });
});
