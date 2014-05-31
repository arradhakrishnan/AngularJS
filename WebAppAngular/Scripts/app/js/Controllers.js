var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope) {
    $scope.phones = [
      {
          'name': 'Nexus S',
          'snippet': 'Fast just got faster with Nexus S.'
      },
      {
          'name': 'Motorola XOOM™ with Wi-Fi',
          'snippet': 'The Next, Next Generation tablet.'
      },
      {
          'name': 'MOTOROLA XOOM™',
          'snippet': 'The Next, Next Generation tablet.'
      }
    ];
});

describe('PhoneListCtrl', function () {

    it('should create "phones" model with 3 phones', function () {
        var scope = {},
            ctrl = new PhoneListCtrl(scope);

        expect(scope.phones.length).toBe(3);
    });

});