var express = require('express');
var app = express();
var data = require('./MOCK_DATA.json');

app.get('/', function (req, res) {
  res.status(200).send(data);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});