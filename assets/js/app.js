'use strict';

/**
 * The main Sails Angular app module
 *
 * @type {angular.Module}
 */
var app = angular.module('coompanySignup', ['ngRoute', 'ngResource', 'ui.bootstrap']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/signup.html',
      controller: 'SignupCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  // use the HTML5 History API
  $locationProvider.html5Mode(true);
});