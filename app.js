/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    tasks = require("./tasks");


// Get yo' models
// var User = require("./models/user.js"),

var app = express();
var server = require('http').createServer(app);

// Configuration
app.configure(function(){
  app.set('engine', require('ejs').__express);  
  app.set('views', __dirname + '/views'); 
  app.set('view engine', 'ejs');
  app.use(express.favicon(__dirname + '/public/favicon.ico'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

var port = process.env.PORT;
app.configure('development', function(){
  port = port || 3000;
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  port = port || 80;
  app.use(express.errorHandler());
  // TODO:
  // add production database connection string
  // mongoose.connect('mongodb://localhost/<app_name>');
});


server.listen(port, function(){
});


app.get('/', routes.home);


/*
 * Run background tasks here:
 */

// Run immediately
// tasks.myTask();

// Run periodically
// setInterval(tasks.myTask, 1000 * 60 * 10);
