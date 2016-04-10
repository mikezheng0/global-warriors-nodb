(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $scope) {
    var video = [{
        id: 0,
        title: 'Global Warriors 2 Main Event Josh Hill vs Josh Rettinghouse',
        link: 'Q4mcfgXIFBk'
      }, {
        id: 1,
        title: '3 Josh Rich vs Dennis Puric',
        link: 'n3iCIABzhmE '
      }, {
        id: 2,
        title: '1 Hale vs Sumatri',
        link: 'F6feewQsUBs'
      }, {
        id: 3,
        title:'Global Warriors 2 Burlington, Ontario Co Main Event Ryan Dickson vs Jason Witt',
        link: '55l3D1Eic_E'
    }];
    $scope.mainVideo = video[2].link;
    $scope.setVideo = function(id){
      $scope.mainVideo = video[id].link;
    }
  }
})();
