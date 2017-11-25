const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database-mongo/Post.js');
const ref = require('../Helpers/refGenerator.js');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '/../Angular-Client')));
app.use(express.static(path.join(__dirname, '/../node_modules')));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.send('Get request to `/` received.');
});

app.post('/home', (request, response) => {
  db.fetchTopFive(request.body.location, (result) => {
    response.send(result);
  });
});

app.get('/search/:city/:input', (request, responce) => {
  db.search(request.params.city, request.params.input, (results) => {
    responce.send(results);
  });
});

app.post('/save', (request, response) => {
  request.body.reference = ref(request.body.city);
  db.save(request.body, () => {
    response.send();
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log('something bad happened', err);
  } else {
    console.log(`server is listening on ${port}`);
  }
});
