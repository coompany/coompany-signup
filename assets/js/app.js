'use strict';

/**
 * The main Sails Angular app module
 *
 * @type {angular.Module}
 */
var app = angular.module('coompanySignup', ['ngRoute', 'ngResource']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/signup.html',
      controller: 'SignupCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});