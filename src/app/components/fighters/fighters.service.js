(function() {
  'use strict';

  angular
    .module('globalWarriorsNodb')
    .service('fighterData', fighterData);

  /** @ngInject */
  function fighterData() {
    var data = [
      {
        'fighter':'Some Guy',
        'image':'assets/images/some-guy.jpg',
        'blurb':'Some guy fights'
      },{
        'fighter':'Josh Hill',
        'image':'assets/images/josh-hill.jpg',
        'blurb':''
      },{
        'fighter':'Joel Powell',
        'image':'assets/images/joel-powell.jpeg',
        'blurb':''
      },{
        'fighter':'Will Romero Hill',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'fighter':'Will Romero Hill',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'fighter':'Will Romero Hill',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'fighter':'Will Romero Hill',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      },{
        'fighter':'Will Romero Hill',
        'image':'assets/images/will-romero.jpg',
        'blurb':''
      }
    ];

    this.getFighters = getFighters;

    function getFighters() {
      return data;
    }
  }
})();
