var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var logger = require('morgan');
var mongoose = require('mongoose');

/* Models */
var Project = require('./models/project.js');

mongoose.connect('mongodb://localhost:27017')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(function(request,response,next){

	response.setHeader('Access-Control-Allow-Origin','*');
	response.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE');
	response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
	response.setHeader('Access-Control-Allow-Credentials', true);

	next();

});


var port = process.env.PORT || 8080;
var router = express.Router();

router.route('/').get(function(request,response){

	response.json({message: 'Welcome to /'});

});

router.route('/project').post(function(request,response){

	var project = new Project();
	project.title = request.body.title;
	project.date = request.body.date;

	project.save(function(err){
		if(err) response.send(err);
		response.json({message: 'Project Created'});
	})

})

router.route('/project/:id').get(function(request,response){

	Project.findById(request.params.id, function(error,project){
		if(error) response.send(error);
		response.json(project);
	})

})

router.route('/project').get(function(request,response){

	Project.find(function(error,projects){
		if(error) response.send(error);
		response.json(projects);
	})

})

app.use('/',router);
app.listen(port);
console.log('Listening on port: '+port);
