'use strict';

module.exports = function(app) {
	var eventtypes = require('../controllers/eventtypes.server.controller');
	var users = require('../controllers/users.server.controller');
	var apiAuth = require('../controllers/api.authorization.server.controller');

	app.route('/eventtypes')
		.get(apiAuth, users.requiresLogin, eventtypes.list)
		.post(apiAuth, users.requiresLogin, eventtypes.create);

	app.route('/eventtypes/:eventtypeId')
		.get(apiAuth, users.requiresLogin, eventtypes.read)
		.put(apiAuth, users.requiresLogin, eventtypes.update)
		.delete(apiAuth, users.requiresLogin, eventtypes.delete);

	// Finish by binding the article middleware
	app.param('eventtypeId', eventtypes.getByID);
};