'use strict';

//Setting up route
angular.module('articlecategories').config(['$stateProvider',
	function($stateProvider) {
		// Articlecategories state routing
		$stateProvider.
		state('articlecategories', {
			url: '/articlecategories',
			templateUrl: 'modules/articlecategories/views/articlecategories.client.view.html'
		});
	}
]);