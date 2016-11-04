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
	assignee: String,
	budgetrange: String,
	platform: String,
	union: Boolean,
	refyear: Number

})

module.exports = mongoose.model('Project', projectSchema);