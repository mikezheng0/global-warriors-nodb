(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .service('fighterData', fighterData);

  /** @ngInject */
  function fighterData() {
    var fighter = [
      {
        'id': 0,
        'name':'Dave Hale',
        'image':'assets/images/some-guy.jpg',
        'blurb':'Some guy fights'
      },{
        'id': 1,
        'name':'Josh Hill',
        'image':'assets/images/josh-hill.jpg',
        'blurb':''
      },{
        'id': 2,
        'name':'Josh Hill',
        'image':'assets/images/josh-hill.jpg',
        'blurb':''
      },{
        'id': 3,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'id': 4,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'id': 5,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'id': 6,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'id': 7,
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
