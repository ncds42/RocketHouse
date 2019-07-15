var keystone = require('keystone');

// DEBUG STATEMENT
console.log(__filename.split("vs-workspace")[1] + '... was loaded!')

exports = module.exports = function (req, res) {
	
	// DEBUG STATEMENT
	console.log(__filename.split("vs-workspace")[1] + '... was executed!')
	
	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'gallery';

	// Load the galleries by sortOrder
	view.query('galleries', keystone.list('Gallery').model.find())
		// .model
		// .find()
		// .sort('sortOrder'));


	// Render the view
	view.render('gallery');

};
