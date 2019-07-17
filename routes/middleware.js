/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');

// DEBUG STATEMENT
// console.log(__filename.split("vs-workspace")[1]+'... was executed!')

/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	// DEBUG STATEMENTS
	console.log('\tInitializing res.locals: ')
	res.locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' },
		{ label: 'Blog', key: 'blog', href: '/blog' },
		{ label: 'Ex-Wife Notes', key: 'exwifenotes', href: '/exwifenotes'},
		// { label: 'Forum', key: 'forum', href: '/forum'},
		// Ex-wife notes perm?
		{ label: 'About', key: 'about', href: '/about'},
		{ label: 'Gallery', key: 'gallery', href: '/gallery' },
	];
	res.locals.user = req.user;
	next();
};

// exports.initLocals = function(req, res, next){
// 	console.log('\t Passing Gallery Photos')
// 	res.locals.navLinks=
// }


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	console.log('\tClearing flash messages')
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	console.log('\tRequiring User to login to access page!')
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
