var myApp = angular.module('myApp');

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams',
	function($scope, $http, $location, $routeParams){
		console.log('Book Finder Application Controller...');

		$scope.searchBooks = function(){ // View All Books
			$http.get('/api/books/search/'+$scope.title).success(function(response){
				console.log(response);
				$scope.books = response;
				window.location.href='#/books/search/';
			});
		}
		$scope.searchByFields = function(){
			console.log($scope.lookup);
			$http.post('/api/books/lookup/', $scope.lookup).success(function(response){
				console.log(response);
				$scope.books = response;
				window.location.href='#/books/lookup/';
			});
		}
}]);
