angular.module('video-player')

.directive('search', function() {
  return {
    scope: {

    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('search $scope: ', $scope);
      this.result = function() {

      };
    },
    templateUrl: 'src/templates/search.html'
  };
});
