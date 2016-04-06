(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .service('fighterData', fighterData);

  /** @ngInject */
  function fighterData() {
    var fighter = [
      {
        'name':'Some Guy',
        'image':'assets/images/some-guy.jpg',
        'blurb':'Some guy fights'
      },{
        'name':'Josh Hill',
        'image':'assets/images/josh-hill.jpg',
        'blurb':''
      },{
        'name':'Josh Hill',
        'image':'assets/images/josh-hill.jpg',
        'blurb':''
      },{
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      }
    ];

    this.getFighters = getFighters;

    function getFighters() {
      return fighter;
    }
  }
})();
