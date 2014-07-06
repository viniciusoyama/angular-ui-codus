/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('myApp', [
'ngRoute', 'ngSanitize', 'ngTouch', 'ngAnimate',		//additional angular modules
'Vinicius Oyama.cds-loading-button'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {
	/**
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
	$locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server
	
	// var staticPath ='/';
	var staticPath;
	// staticPath ='/angular-directives/cds-loading-button/';		//local
	staticPath ='/';		//nodejs (local)
	// staticPath ='/cds-loading-button/';		//gh-pages
	var appPathRoute ='/';
	var pagesPath =staticPath+'pages/';
	
	
	$routeProvider.when(appPathRoute+'home', {templateUrl: pagesPath+'home/home.html'});

	$routeProvider.otherwise({redirectTo: appPathRoute+'home'});
	
}]);