'use strict';

// Event Types module config
angular.module('eventtypes').run(['Menus',
		function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Event Types', 'eventtypes', 'dropdown', '/eventtypes(/create)?');
		Menus.addSubMenuItem('topbar', 'eventtypes', 'List Event Types', 'eventtypes');
		Menus.addSubMenuItem('topbar', 'eventtypes', 'New Event Type', 'eventtypes/create');
	}
]);