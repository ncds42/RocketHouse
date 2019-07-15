/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var path = require('path');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname); // (__dirname) Allows for quick relative directory routing

// DEBUG STATEMENT
console.log(__filename.split("vs-workspace")[1] + '... was executed!')

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'), // Turns routes into easy-to-use object variables
};

// Setup Route Bindings
exports = module.exports = function (app) {
	console.log('\tSetting up route bindings!')
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.get('/forum', routes.views.forum);
	app.get('/about', routes.views.about);
	app.get('/exwifenotes', routes.views.exwifenotes);
	app.all('/contact', routes.views.contact);
	app.get('/download', function (req, res) {
		console.log('Printing...'+__dirname);
		res.redirect('/downloads/MADGWorkbook.docx');
	})

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
