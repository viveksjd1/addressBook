var express = require('express');
var app = express();
var employees = require('./data/employees.json');
var employeeModifications = [];
var jsonfile = require('jsonfile');
var file = './data/employees.json';
var bodyParser = require('body-parser');

var loki = require('lokijs');// in-memory database
var db = new loki('demo.json');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('public'));

	//children.findAll(); finding from in memory database.

app.get('/employees', function  (req, res) {
  res.json(jsonfile.readFileSync(file));
});

app.post('/employeeModifications', urlencodedParser, function  (req, res) {

	 // var children = db.addCollection('children');
	 //  children.insert({
	 //       first_name:req.body.first_name,
	 //       last_name:req.body.last_name,
	 //       email:req.body.email,
	 //       role:req.body.role
	 //   });
	// console.log(req.body.firstName);

	/*response = {
       first_name:req.body.firstName,
       last_name:req.body.lastName,
       last_name:req.body.email

   };*/
   //console.log(response);

   jsonfile.writeFileSync(file, req.body)
   res.send("success");
});


var server = app.listen(3000, function () {

  console.log("Application is running on http://localhost:3000/");

})