var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'BooksController',
		templateUrl: 'views/home.html'
	})
	.when('/books', {
		controller:'BooksController',
		templateUrl: 'views/home.html'
	})
	.when('/books/search/',{
		controller:'BooksController',
		templateUrl: 'views/search_book.html'
	})
	.when('/books/lookup/',{
		controller:'BooksController',
		templateUrl: 'views/lookup_book.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
