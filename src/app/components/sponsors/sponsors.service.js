(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .service('sponsorData', sponsorData);

  /** @ngInject */
  function sponsorData() {
    var sponsor = [
      {
        'id': 0,
        'name':'Peckered Promotions',
        'image':'assets/images/sponsors/peckerd-promotions.png',
        'url':'5\'10\"'
      },{
        'id': 1,
        'name':'Martial Law',
        'image':'assets/images/sponsors/martiallaw.png',
        'url':'5\'6\"'

      },{
        'id': 2,
        'name':'Molsons Canadian',
        'image':'assets/images/sponsors/molson-cdn.png',
        'url':'5\'10\"',
      },{
        'id': 3,
        'name':'Ohsweken Speedway',
        'image':'assets/images/sponsors/ohsweken.jpg',
        'url':'5\'7\"'
      },{
        'id': 4,
        'name':'Squadron Seventy One',
        'image':'assets/images/sponsors/sq71.png',
        'url':'6\'0\"'
      },{
        'id': 5,
        'name':'Kamikaze',
        'image':'assets/images/sponsors/kamikaze.png',
        'url':'6\'2\"'
      }
    ];

    this.getSponsors = getSponsors;

    function getSponsors() {
      return sponsor;
    }

  }
})();
