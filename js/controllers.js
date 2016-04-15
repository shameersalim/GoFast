angular.module('app.controllers', [])

.controller('routesTabCtrl', function($scope) {

})

.controller('cartTabDefaultPageCtrl', function($scope) {

})

.controller('settingsTabCtrl', function($scope) {
  var setup = JSON.parse(window.localStorage.getItem("setup"));

$scope.address1 = setup.address1,
$scope.address2 = setup.address2`,
$scope.pushNotifications = setup.pushNotifications;

$scope.address1ChangeHandler = function() {
saveSetupInformation();
};

$scope.address2ChangeHandler = function() {
saveSetupInformation();
};

$scope.pushNotifications = function() {
saveSetupInformation();
};

var saveSetupInformation = function() {
  var setup = {};
  setup.address1 = $scope.address1;
  setup.address2 = $scope.address2;
  setup.pushNotifications = $scope.pushNotifications;
  window.localStorage.setItem("setup", JSON.stringify(setup));
};
})
