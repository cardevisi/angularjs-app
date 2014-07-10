'use strict';

(function() {

	var app = angular.module('config-routes', ['ngRoute']);
		
		app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
	  		
	  		// configure html5 to get links working on jsfiddle
	  		$locationProvider.html5Mode(true);

	  		$routeProvider.when('/angularjs_app/home', {
	    		templateUrl: './partials/home.html',
	    		controller: 'MainController'
	    		//controllerAs: 'login'
	  		})
			$routeProvider.when('/angularjs_app/login', {
	    		templateUrl: './partials/login.html',
	    		controller: 'LoginController'
	    		//controllerAs: 'main'
	  		});
	  		$routeProvider.when('/angularjs_app/create-products', {
	    		templateUrl: './partials/create-products.html',
	    		controller: 'PostProducts'
	    		//controllerAs: 'main'
	  		});
			$routeProvider.otherwise({redirectTo: '/angularjs_app/home'});

	  		
		}]);

})();