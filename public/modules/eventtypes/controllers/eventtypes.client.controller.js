'use strict';


angular.module('eventtypes').controller('EventtypesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Eventtypes',
	function($scope, $stateParams, $location, Authentication, Eventtypes) {
		$scope.authentication = Authentication;
	  	$scope.currentPage = 1;
	  	$scope.pageSize = 10;
	  	$scope.offset = 0;

	  	// Page changed handler
	  	$scope.pageChanged = function() {
	   	$scope.offset = ($scope.currentPage - 1) * $scope.pageSize;
	  	};

		// Create new Event Type
		$scope.create = function() {
			// Create new Event Type object
			var eventtype = new Eventtypes ({
				type: this.type,
				description: this.description
			});

			// Redirect after save
			eventtype.$save(function(response) {
				$location.path('eventtypes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Category
		$scope.remove = function(eventtype) {
			if ( eventtype ) { 
				eventtype.$remove();

				for (var i in $scope.eventtypes) {
					if ($scope.eventtypes [i] === eventtype) {
						$scope.eventtypes.splice(i, 1);
					}
				}
			} else {
				$scope.eventtype.$remove(function() {
					$location.path('eventtypes');
				});
			}
		};

		// Update existing Category
		$scope.update = function() {
			var eventtype = $scope.eventtype;

			eventtype.$update(function() {
				$location.path('eventtypes/' + eventtype._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Categories
		$scope.find = function() {
			$scope.eventtypes = Eventtypes.query();
		};

		// Find existing Event Type
		$scope.findOne = function() {
			$scope.eventtype = Eventtypes.get({ 
				eventtypeId: $stateParams.eventtypeId
			});
		};

		
	}
]);
