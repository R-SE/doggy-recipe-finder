const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client/dist/')));

app.get('/recipes', (req, res) => {
  let { query } = req.query;
  console.log(query);
  axios.get(`http://www.recipepuppy.com/api/?q=${query}`)
  .then(({data}) => res.send(data.results))
  .catch(err => console.log(err));
});



let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}!`));