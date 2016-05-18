var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var employees = require('./data/employees.json');
var employeeModifications = [];
var jsonfile = require('jsonfile');
var util = require('util');
var file = './data/employees.json';



// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/employees', function  (req, res) {
  res.json(jsonfile.readFileSync(file));
});

app.post('/employeeModifications', function  (req, res) {
   jsonfile.writeFileSync(file, req.body)
   res.send("success");
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})