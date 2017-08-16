'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	validation = require('./validation.server.model');

/**
 * Articlecategory Schema
 */
var ArticlecategorySchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	description: {
		type: String,
		default: '',
		trim: true
	},
	name: {
		type: String,
		default: '',
		trim: true, 	
		unique : true,
		required: 'name cannot be blank',
		validate: [validation.len(15), 'name must be 15 chars in length or less']
	}
});

mongoose.model('Articlecategory', ArticlecategorySchema);