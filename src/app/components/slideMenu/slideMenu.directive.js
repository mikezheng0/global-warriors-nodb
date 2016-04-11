/**
 * Created by mike_ on 2016-04-10.
 */
(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .directive('slideMenu', slideMenu);

  /** @ngInject */
  function slideMenu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/slideMenu/slide-menu.html',
      scope: true,
      controller: SlideController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function SlideController($mdSidenav) {
      var vm = this;
      vm.close = close;
      /////////
      function close() {
        $mdSidenav('right').close()
      }
    }
  }

})();
