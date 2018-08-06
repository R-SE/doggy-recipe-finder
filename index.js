const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client/dist/')))

app.get('/', (req, res) => res.send());



let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port ${port}!`));