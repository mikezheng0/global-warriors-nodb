(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .controller('FighterDetailsController', FighterDetailsController);

  /** @ngInject */
  function FighterDetailsController($scope, fighterData, $stateParams) {
    $scope.fighters = fighterData.getFighters();
    $scope.fighter = $scope.fighters[$stateParams.id];
  }
})();
