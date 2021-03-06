'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
	'ngRoute',
	'ngResource',
	'myApp.filters',
	'myApp.services',
	'myApp.directives',
	'myApp.controllers'
]).
config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.when('/listing', {
			templateUrl: 'partials/listing.html',
			controller: 'listingController'
		});
		$routeProvider.when('/grid', {
			templateUrl: 'partials/grid.html',
			controller: 'listingController'
		});
		$routeProvider.when('/new', {
			templateUrl: 'partials/new.html',
			controller: 'newController'
		});
		$routeProvider.when('/details/:id', {
			templateUrl: 'partials/details.html',
			controller: 'detailsController'
		});
		$routeProvider.otherwise({
			redirectTo: '/listing'
		});
	}
]);


angular.module('myApp.controllers', []);