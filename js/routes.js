angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.routesTab', {
    url: '/routes',
    views: {
      'tab1': {
        templateUrl: 'templates/routesTab.html',
        controller: 'routesTabCtrl'
      }
    }
  })

  .state('cartTabDefaultPage', {
    url: '/page3',
    templateUrl: 'templates/cartTabDefaultPage.html',
    controller: 'cartTabDefaultPageCtrl'
  })

  .state('tabsController.settingsTab', {
    url: '/settings',
    views: {
      'tab3': {
        templateUrl: 'templates/settingsTab.html',
        controller: 'settingsTabCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/routes')

  

});