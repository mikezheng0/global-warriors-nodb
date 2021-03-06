(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('fighters', {
      url: '/fighters',
      templateUrl: 'app/fighters/fighters.html',
      controller: 'FighterController',
      controllerAs: 'fighter'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/events/events.html',
        controller: 'EventController',
        controllerAs: 'event'
      })
      .state('fighterDetails', {
        url: '/fighters/:id',
        templateUrl: 'app/fighter-details/fighter-details.html',
        controller: 'FighterDetailsController',
        controllerAs: 'fighter-details'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
