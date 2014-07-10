(function(){
	var app = angular.module('services', []);

	app.controller('GetProducts', ['$http', function($http){
		var store = this;
			store.products = [];
		$http.get('api/products.json').success(function(data){
			store.products = data;
			console.log("DATA >>>>", data);
		});
	}]);


})();