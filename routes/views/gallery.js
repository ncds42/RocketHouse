var keystone = require("keystone");

exports = module.exports = function(req, res) {
	// DEBUG STATEMENT
	// console.log(__filename.split("vs-workspace")[1] + '... was executed!')

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.range = function(a, b, step) {
		var range = [];

		if (typeof a == "number") {
			range[0] = a;
			step = step || 1;
			while (a + step <= b) {
				range[range.length] = a += step;
			}
		} else {
			var s = "abcdefghijklmnopqrstuvwxyz";

			if (a === a.toUpperCase()) {
				b = b.toUpperCase();
				s = s.toUpperCase();
			}

			s = s.substring(s.indexOf(a), s.indexOf(b) + 1);
			range = s.split("");
		}

		return range;
	};

	// Set locals
	locals.section = "gallery";

	// Load the galleries by sortOrder
	view.query("galleries", keystone.list("Gallery").model.find());
	// .sort('sortOrder'));

	exports.range = function(a, b, step) {
		var range = [];

		if (typeof a == "number") {
			range[0] = a;
			step = step || 1;
			while (a + step <= b) {
				range[range.length] = a += step;
			}
		} else {
			var s = "abcdefghijklmnopqrstuvwxyz";

			if (a === a.toUpperCase()) {
				b = b.toUpperCase();
				s = s.toUpperCase();
			}

			s = s.substring(s.indexOf(a), s.indexOf(b) + 1);
			range = s.split("");
		}

		return range;
	};

	// Render the view
	view.render("gallery");
};
