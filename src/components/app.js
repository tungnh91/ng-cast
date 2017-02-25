angular.module('video-player')
.controller('videosController', function($scope, $window) {
  $scope.exampleVideoData = $window.exampleVideoData;
  $scope.video = $scope.exampleVideoData[0];
  console.log('hello', $scope);
  $scope.clickHandler = function() {

  };
  $scope.selectVideo = function() {

  };
  console.log('video-player module controller scope: ', $scope);
})

.directive('app', function() {
  return {
    scope: {
      exampleVideoData: '<',
      selectVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, $window) {
      
      console.log('this is the app scope', $scope);
    },
    templateUrl: 'src/templates/app.html'
  };
});