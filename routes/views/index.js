var keystone = require('keystone');

// DEBUG STATEMENT
console.log(__filename.split("vs-workspace")[1] + '... was loaded!')

exports = module.exports = function (req, res) {

	// DEBUG STATEMENT
	console.log(__filename.split("vs-workspace")[1] + '... was executed!')

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	// posts = keystone.list('Post').model.find({state:"published"})
	// 	.where('state','published')
	// 	.exec(function(err,posts){
	// 	});

	
	// view.query('posts', keystone.list('Post').model.find());

	// Get the posts
	// Load the posts

	locals.data = {
		posts: [],
		categories: [],
	};

	view.on('init', function (next) {

		var q = keystone.list('Post').paginate({
			page: req.query.page || 1,
			perPage: 10,
			maxPages: 10,
			filters: {
				state: 'published',
			},
		})
			.sort('-publishedDate')
			.populate('author categories');

		q.exec(function (err, results) {
			locals.data.posts = results;
			next(err);
		});
	});
	



	// Render the view
	view.render('index');
};
