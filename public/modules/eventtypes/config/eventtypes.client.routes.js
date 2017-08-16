'use strict';

//Setting up route
angular.module('eventtypes').config(['$stateProvider',
	function($stateProvider) {
		// Eventtypes state routing
		$stateProvider.
		
		state('listEventTypes', {
			url: '/eventtypes',
			templateUrl: 'modules/eventtypes/views/list-eventtypes.client.view.html'
		}).
		state('createEventType', {
			url: '/eventtypes/create',
			templateUrl: 'modules/eventtypes/views/create-eventtype.client.view.html'
		}).
		state('viewEventType', {
			url: '/eventtypes/:eventtypeId',
			templateUrl: 'modules/eventtypes/views/view-eventtype.client.view.html'
		}).
		state('editEventType', {
			url: '/eventtypes/:eventtypeId/edit',
			templateUrl: 'modules/eventtypes/views/edit-eventtype.client.view.html'
		});
	}
]);