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
        'height':'5\'10\"',
        'weight': '135lbs',
        'record': '10-0-0'
      },{
        'id': 1,
        'name':'Josh Hill',
        'image':'assets/images/josh-hill.jpg',
        'height':'5\'10\"',
        'weight': '135lbs',
        'record': '10-0-0'
      },{
        'id': 2,
        'name':'Josh Hill',
        'image':'assets/images/josh-hill.jpg',
        'height':'5\'10\"',
        'weight': '135lbs',
        'record': '10-0-0'
      },{
        'id': 3,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'10\"',
        'weight': '135lbs',
        'record': '10-0-0'
      },{
        'id': 4,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'10\"',
        'weight': '135lbs',
        'record': '10-0-0'
      },{
        'id': 5,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'10\"',
        'weight': '135lbs',
        'record': '10-0-0'
      },{
        'id': 6,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'10\"',
        'weight': '135lbs',
        'record': '10-0-0'
      },{
        'id': 7,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'10\"',
        'weight': '135lbs',
        'record': '10-0-0'
      }
    ];

    this.getFighters = getFighters;

    function getFighters() {
      return fighter;
    }

  }
})();
