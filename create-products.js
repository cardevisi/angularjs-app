(function(){
	
	var app = angular.module('create-products', []);

	app.controller('PostProducts', ['$http', function($http){
		$http.post('api/products.json').success(function(data){
			console.log("DATA >>>>", data);
		});
	}]);


	app.directive('createProduct', function() {
		return {
			restrict:'A',
			templateUrl:'create-products.html'
		};
	});


})();