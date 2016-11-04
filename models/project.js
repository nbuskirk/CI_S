var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
	name: String,
	date: { type: Date, default: Date.now },
	category: String,
	type: String,
	status: String,
	keywords: Array,
	year: Number,
	assignee: String

})

module.exports = mongoose.model('Project', projectSchema);