(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .controller('MediaController', MediaController);

  /** @ngInject */
  function MediaController($scope, fighterData) {
    var vm = this;
    vm.fighters = fighterData.getFighters();
  }
})();
