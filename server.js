// Week 14  Homework - BURGER - NODE - EXPRESS - HANDLEBARS
// Tom Keel - Due Aug 7th, 2016
//
// From the specs:
// This app is burger logger with MySQL, Node, Express, Handlebars and a homemade ORM.
// Eat‐Da‐Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
// Whenever a user submits a burger's name, the app will display the burger on the left side of the page, 
//   waiting to be devoured.
// Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will 
//   move to the right side of the page.
// The app will store every burger in a database, whether devoured or not.
//

var express = require('express');
var app = express();
// Serve static content for the app from the 
//    "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

//--------------------------------------------------------
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

//--------------------------------------------------------
var methodOverride = require('method-override');
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

//--------------------------------------------------------
// express-handlebars...
var exphbs = require('express-handlebars');
// default html  - main.handlebars file
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//--------------------------------------------------------

//mysql - see connection.js


//--------------------------------------------------------
// root - get route
//app.get('/', function(req,res) {

//    connection.query('SELECT * FROM burgers;', function(err, data) {
//      if (err) throw err;

//        //console.log('The solution is: ', data); //test it
//        //res.send(data);													//test it
//        res.render('index', {burgers : data});
//    });
//});


//app.get('/cats/create', function(req,res) {
//  console.log('The solution is... ');
//});

//app.get('/', function(req, res) {
//	res.render('index');
//})

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//--------------------------------------------------------
var PORT = process.env.PORT || 3000; // Sets an initial port.
app.listen(PORT, function() {
	console.log("Burger server App listening on PORT: " + PORT);
});