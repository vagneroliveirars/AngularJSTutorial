/**
 * This defines the project module
 */

/*
 * Modules can depend on other modules. Here, project needs firebase which
 * handles the persistence for this application.
 */ 
angular.module('project', ['ngRoute', 'firebase'])

	.value('fbURL', 'https://ng-projects-list.firebaseio.com/')
	.service('fbRef', function(fbURL) {
		return new Firebase(fbURL);
	})
	
	.service('fbAuth', function($q, $firebase, $firebaseAuth, fbRef) {
		var auth;
		return function() {
			if (auth) return $q.when(auth);
				
			
		}
	})