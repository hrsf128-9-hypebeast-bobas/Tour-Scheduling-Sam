const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.get('/data', (req, res) => {
  res.status(200).send('Success!');
});

app.listen(port, () => {
  console.log('App is listening on port: ', port);
});
