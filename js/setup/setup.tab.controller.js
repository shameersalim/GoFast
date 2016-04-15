(function() {
  "use strict";

angular.module('app').controller("SetupTabController", SetupTabController);

SetupTabController.$inject = ["$scope"];
function  SetupTabController($scope) {
  $scope.setup = JSON.parse(window.localStorage.getItem("setup"));
  if($scope.setup === null) {
    $scope.setup = {};
    $scope.setup.address1 = $scope.setup.address2 = '';
    $scope.setup.pushNotifications = true;
  }
  $scope.masterSetup = angular.copy($scope.setup);


  $scope.address1ChangeHandler = function() {
  saveSetupInformation();
  };

  $scope.address2ChangeHandler = function() {
  saveSetupInformation();
  };

  $scope.pushNotificationsClickHandler = function() {
  saveSetupInformation();
  };

  var saveSetupInformation = function() {
    window.localStorage.setItem("setup", JSON.stringify($scope.setup));
  };
 }

}());
