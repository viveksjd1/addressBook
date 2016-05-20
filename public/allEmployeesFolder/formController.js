var form = angular.module('emailExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.email = {
        text: 'me@example.com'
      };
    }]);