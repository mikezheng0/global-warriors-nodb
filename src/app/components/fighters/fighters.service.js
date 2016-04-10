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
        'weight': '145lbs',
        'record': '2-2-0'
      },{
        'id': 1,
        'name':'Josh Hill',
        'image':'assets/images/josh-hill.jpg',
        'height':'5\'6\"',
        'weight': '135lbs',
        'record': '13-1-0'
      },{
        'id': 2,
        'name':'Alex Ricci',
        'image':'assets/images/josh-hill.jpg',
        'height':'5\'10\"',
        'weight': '155lbs',
        'record': '9-3-0'
      },{
        'id': 3,
        'name':'Lyndon Whitlock',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'7\"',
        'weight': '135lbs',
        'record': '10-5-0'
      },{
        'id': 4,
        'name':'Jonathan Brookins',
        'image':'assets/images/will-romero.jpg',
        'height':'6\'0\"',
        'weight': '135lbs',
        'record': '15-7-0'
      },{
        'id': 5,
        'name':'Craig Hudson',
        'image':'assets/images/will-romero.jpg',
        'height':'6\'2\"',
        'weight': '265lbs',
        'record': '4-6-0'
      },{
        'id': 6,
        'name':'Don Wonch',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'3\"',
        'weight': '205lbs',
        'record': '2-1-0'
      },{
        'id': 7,
        'name':'Will Romero',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'9\"',
        'weight': '145lbs',
        'record': '9-5-1'
      },{
        'id': 8,
        'name':'Mike Malott',
        'image':'assets/images/will-romero.jpg',
        'height':'6\'0\"',
        'weight': '145lbs',
        'record': '4-1-1'
      },{
        'id': 9,
        'name':'Adam Assenza',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'7\"',
        'weight': '145lbs',
        'record': '6-3-0'
      },{
        'id': 10,
        'name':'TJ Laramie',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'7\"',
        'weight': '135lbs',
        'record': '2-0-0'
      },{
        'id': 11,
        'name':'Andrew Cseh',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'6\"',
        'weight': '125lbs',
        'record': '7-5-0'
      },{
        'id': 12,
        'name':'Malcolm Gordon',
        'image':'assets/images/will-romero.jpg',
        'height':'5\'7\"',
        'weight': '125lbs',
        'record': '6-2-0'
      },{
        'id': 13,
        'name':'Chris Lee Bryne',
        'image':'assets/images/will-romero.jpg',
        'height':'n/a',
        'weight': '185lbs',
        'record': '0-0-0'
      },{
        'id': 14,
        'name':'Johnny Sagnuinetti',
        'image':'assets/images/will-romero.jpg',
        'height':'n/a',
        'weight': '185lbs',
        'record': '0-0-0'
      },{
        'id': 15,
        'name':'Scott Macovi',
        'image':'assets/images/will-romero.jpg',
        'height':'n/a',
        'weight': '125lbs',
        'record': '1-0-0'
      },{
        'id': 16,
        'name':'Tyler Kirk',
        'image':'assets/images/will-romero.jpg',
        'height':'n/a',
        'weight': '125lbs',
        'record': '0-3-0'
      }
    ];

    this.getFighters = getFighters;

    function getFighters() {
      return fighter;
    }

  }
})();
