/* Project Model */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({

	title: String,
	label: String,
	date: { type: Date, default: Date.now },
	category: String,
	type: String,
	status: String,
	Keywords: Array,
	year: Number,
	assignee: String

})

module.exports = mongoose.model('Project', projectSchema);