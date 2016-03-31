(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
