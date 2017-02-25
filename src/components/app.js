angular.module('video-player')

.controller('videosController', function($scope, $window) {
  $scope.exampleVideoData = $window.exampleVideoData;
  console.log('video-player module controller scope: ', $scope);
})

.directive('app', function() {
  return {
    scope: {
      exampleVideoData: '<'
    },
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope, $window) {
      // $scope.exampleVideoData = $window.exampleVideoData;
      // console.log('app controller scope: ', $scope);
      // console.log('app controller this:', this);
    },
    templateUrl: 'src/templates/app.html'
  };
});