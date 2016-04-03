(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .controller('FighterController', FighterController);

  /** @ngInject */
  function FighterController($scope, fighterData) {
    $scope.fighters = fighterData.getFighters();
  }
})();
