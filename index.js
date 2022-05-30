const express = require('express');
const fallback = require('express-history-api-fallback');

const app = express();
const PORT = 3000;

app.use('/', express.static(`${__dirname}/build`));
app.use('/favicon.ico', express.static(`${__dirname}/build`));
app.use('/assets/', express.static(`${__dirname}/assets`));
app.use(fallback('/', {root: `${__dirname}/build`}));

app.listen(PORT, () => {
  console.log(`Mega Game BFF listening on port ${PORT}!`);
});
