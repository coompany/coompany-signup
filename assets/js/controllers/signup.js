'use strict';

angular.module('coompanySignup')
  .controller('SignupCtrl', ['$scope', 'Subscription', function($scope, Subscription) {

    $scope.user = {};
    $scope.privacy = false;
    $scope.alerts = [];
    $scope.hideForm = false;

    $scope.submit = function() {
       Subscription.save($scope.user,
         function(user) {
           console.log('user', user);
           $scope.addAlert('success', 'Complementi, ti sei iscritto con successo!');
           $scope.hideForm = true;
         },
         function(err) {
           console.log('Err: ',err);
           if(err.status === 409) {
            $scope.addAlert('danger','Questo indirizzo risulta già essere registrato');
           } else {
            //TODO manage errors 4xx & 5xx
           }
         }
       );
    };

    $scope.addAlert = function(type, msg) {
      $scope.alerts.push({type: type, msg: msg});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

    $scope.restart = function() {
      $scope.user = {};
      $scope.privacy = false;
      $scope.alerts = [];
      $scope.hideForm = false;
    };

  }]);
