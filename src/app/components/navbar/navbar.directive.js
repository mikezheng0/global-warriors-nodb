(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar($window) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      link: navbarResizer,
      bindToController: true
    };

    return directive;

    function navbarResizer(scope, element, attrs) {
      angular.element($window).bind("scroll", function() {
          if (!scope.scrollPosition) {
              scope.scrollPosition = 0
          }

          if (this.pageYOffset > scope.scrollPosition) {
              scope.boolChangeClass = true;
          } else {
              scope.boolChangeClass = false;
          }
          scope.scrollPosition = this.pageYOffset;
          scope.$apply();
      });
    }
    /** @ngInject */
    function NavbarController($mdSidenav, $scope) {

      var vm = this;

      vm.openRightMenu = openRightMenu;

      ////////////

      function openRightMenu() {
        $mdSidenav('right').toggle();
      }

      // "vm.creationDate" is available by directive option "bindToController: true"
    }
  }

})();
