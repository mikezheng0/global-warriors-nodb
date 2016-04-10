(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($mdSidenav) {
      var vm = this;

      vm.openRightMenu = openRightMenu;

      ////////////

      function openRightMenu() {
        $mdSidenav('right').toggle();
      };

      // "vm.creationDate" is available by directive option "bindToController: true"
    }
  }

})();
