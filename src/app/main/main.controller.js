(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, fighterData) {
      $scope.fighters = fighterData.getFighters();
  }
  
})();
