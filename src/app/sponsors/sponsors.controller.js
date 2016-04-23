(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .controller('SponsorController', SponsorController);

  /** @ngInject */
  function SponsorController($scope, sponsorData) {
    $scope.sponsors = sponsorData.getSponsors();
  }

})();
