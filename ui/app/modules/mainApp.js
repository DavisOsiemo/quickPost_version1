var blogApp=angular.module('blogApp',[ 'ngRoute','ngResource']);

blogApp.config(['$routeProvider', '$locationProvider', '$httpProvider',
		function($routeProvider,$locationProvider,$httpProvider){

				$routeProvider.when('/signup',{
					templateUrl:'./partials/signup-template.html',
					controller:'SignupController'
				}).when('/login',{
					templateUrl:'./partials/login-template.html',
					controller:'LoginController'
				}).otherwise({
	                redirectTo: '/home'
	            });


	}]);