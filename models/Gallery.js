var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Gallery = new keystone.List('Gallery', { //  key Value for list keystone.List map
	autokey: { from: 'name', path: 'key', unique: true }, // This just generates unique keys
}); 

// DEBUG STATEMENT
// console.log(__filename.split("vs-workspace")[1]+'... was load!')

Gallery.add({
	name: { type: String, required: true },
	publishedDate: { type: Date, default: Date.now },
	heroImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
});

Gallery.register();
