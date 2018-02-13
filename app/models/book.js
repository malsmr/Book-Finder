var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
			title:      { type: String, required: false },
			genre:      { type: String, required: false },
			description:{ type: String, required: false },
			author:     { type: String, required: false },
			publisher:  { type: String, required: false },
			image_url:  { type: String, required: false },
			publish_date:{ type: Date, default: Date.now}
	});

var Book = module.exports = mongoose.model('Book', bookSchema);
