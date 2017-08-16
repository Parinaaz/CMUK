'use strict';

// Articlecategories module config
angular.module('articlecategories').run(['Menus',
	function(Menus) {
		// Config logic
		// ...
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Article Categories', 'articlecategories', 'dropdown', '/articlecategories(/create)?');
		Menus.addSubMenuItem('topbar', 'articlecategories', 'List Article Categories', 'articlecategories');
		Menus.addSubMenuItem('topbar', 'articlecategories', 'New Article Category', 'articlecategories/create');
	}
]);