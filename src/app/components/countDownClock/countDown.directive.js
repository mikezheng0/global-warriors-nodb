(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .directive('countDown', countDown);

  /** @ngInject */
  function countDown() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/countDownClock/count-down.html',
      scope: true,
      controller: CountDownController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CountDownController($scope, $interval) {
      var vm = this;
      var stop;
      var deadline = '2016-05-28';
      initializeClock(deadline);


      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date());
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      }

      function initializeClock(endtime) {
        stop = $interval(function () {
          var t = getTimeRemaining(endtime);

          vm.days = t.days;
          vm.hours = ('0' + t.hours).slice(-2);
          vm.minutes = ('0' + t.minutes).slice(-2);
          vm.seconds = ('0' + t.seconds).slice(-2);
        },1000);
      }

      var stopCounter = function() {
        if (angular.isDefined(stop)) {
          $interval.cancel(stop);
          stop = undefined;
        }
      };

      $scope.$on('$destroy', function() {
        // Make sure that the interval is destroyed too
        stopCounter();
      });

    }
  }

})();
