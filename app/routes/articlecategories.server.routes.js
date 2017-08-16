'use strict';

module.exports = function(app) {
	// Routing logic   
	// ...
	var articlecategories = require('../controllers/articlecategories.server.controller');
	var users = require('../controllers/users.server.controller');
	var apiAuth = require('../controllers/api.authorization.server.controller');

	app.route('/articlecategories')
		.get(apiAuth, users.requiresLogin, articlecategories.list)
		.post(apiAuth, users.requiresLogin, articlecategories.create);

	app.route('/articlecategories/:articlecategoryId')
		.get(apiAuth, users.requiresLogin, articlecategories.read)
		.put(apiAuth, users.requiresLogin, articlecategories.update)
		.delete(apiAuth, users.requiresLogin, articlecategories.delete);

	// Finish by binding the article middleware
	app.param('ariticlecategoryId', articlecategories.getByID);
};