/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router  = express.Router();
var burger  = require('../models/burger.js');

//router.get('/', function (req, res) {
//	res.redirect('/burgers');
//});

router.get('/', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burgers: data };
		//console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	//console.log("req.body=" + JSON.stringify(req.body));
	if (req.body.name != "") {
			burger.create(['burgerName','devoured'],[req.body.name,'0'], function () {
			res.redirect('/');
			});
	}
});

  router.get('/burgers/updateT/:burgerId', function (req, res) {
	//console.log("/burgers/updateT...");
	var condition = 'burgerId = ' + req.params.burgerId;

	//console.log('condition=', condition);

	burger.update({ devoured: '1' }, condition, function () {
	res.redirect('/');
	});
});

  router.get('/burgers/updateF/:burgerId', function (req, res) {
	//console.log("/burgers/updateF...");
	var condition = 'burgerId = ' + req.params.burgerId;

	//console.log('condition=', condition);

	burger.update({ devoured: '0' }, condition, function () {
	res.redirect('/');
	});
}); 

//router.delete('/burgers/delete/:burgerId', function (req, res) {
//	var condition = 'burgerId = ' + req.params.burgerId;

//urger.delete(condition, function () {
//res.redirect('/');
//	});
//});


// Delete burgers from the URL line   
//   ex: http://localhost:3000/delete/239
router.get('/delete/:burgerId', function (req, res) {
	var condition = 'burgerId = ' + req.params.burgerId;

	burger.delete(condition, function () {
	res.redirect('/');
	});
});

module.exports = router;