var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Gallery Model
 * =============
 */

var Note = new keystone.List('Note'); 

// DEBUG STATEMENT
// console.log(__filename.split("vs-workspace")[1]+'... was load!')

Note.add({
	name: { type: String, required: true },
	content: {type: Types.Html, wysiwyg:true,},
	textArea: {type: Types.Textarea }
});

Note.register();
