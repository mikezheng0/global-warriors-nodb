(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .directive('footerBar', footerBar);

  /** @ngInject */
  function footerBar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController(moment) {
      var vm = this;

      // "vm.creationDate" is available by directive option "bindToController: true"
    }
  }

})();
