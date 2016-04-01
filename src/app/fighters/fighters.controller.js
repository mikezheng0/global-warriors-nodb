(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .controller('FighterController', FighterController);

  /** @ngInject */
  function FighterController($scope, fighterData) {
    var vm = this;
    $scope.fighters = fighterData.getFighters();
  }
})();
