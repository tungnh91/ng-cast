angular.module('video-player')
.directive('videoList', function() {

  return {
    scope: {
      videos: '<'
    },
    controllerAs: 'props',
    bindToController: true,
    controller: function($scope) {
      console.log('videoList $scope:', $scope);
    },
    templateUrl: 'src/templates/videoList.html' 
  };
});
