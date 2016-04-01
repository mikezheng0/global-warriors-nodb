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
    });

    $urlRouterProvider.otherwise('/');
  }

})();
