'use strict';

var app = angular.module('coompanySignup')
  .factory('Subscription', ['$resource', function($resource) {

  return $resource('/api/subscription/:id');

}]);
