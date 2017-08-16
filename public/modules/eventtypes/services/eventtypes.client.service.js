'use strict';

angular.module('eventtypes').factory('Eventtypes', ['$resource',
	function($resource) {
		return $resource('eventtypes/:eventtypeId', { eventtypeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);