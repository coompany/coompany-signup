'use strict';

angular.module('coompanySignup')
  .controller('SignupCtrl', ['$scope', 'Subscription', function($scope, Subscription) {

    $scope.user = {};

    $scope.submit = function() {
      console.log('Submitted...');
       var res = Subscription.save($scope.user, function(user) {
         console.log(user);
       });
    };

  }]);
