var express = require('express')
var cors = require('cors')
var data = require('./MOCK_DATA.json')

var app = express()
app.use(cors())

app.get('/', function (req, res) {
  res.status(200).json(data)
})

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})