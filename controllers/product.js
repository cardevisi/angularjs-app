(function(){

	// ******************
	// Dependencies ...
	// ******************
	var app = angular.module('store-products', []);

	//*********************
	// Custom Directives ...
	//*********************
	app.directive('productTitle', function() {
		return {
			restrict:'E',
			templateUrl:'product-title.html'
		};
	});

	app.directive('productTitle', function() {
		return {
			restrict:'A',
			templateUrl:'./partials/product-title.html'
		};
	});

	app.directive('productTabs', function(){
		return {
			restrict:'E',
			templateUrl:'./partials/product-tabs.html',
			controller: function() {
				this.tab = 3;
				this.setTab = function(selectedTab) {
		    		this.tab = selectedTab;
		    	};
				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				};
			},
			controllerAs:'tab'
		};
	});
	//*********************
})();