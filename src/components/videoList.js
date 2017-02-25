angular.module('video-player')
.directive('videoList', function() {

  return {
    scope: {
      videos: '<',
      onClick: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('videoList $scope:', $scope);
    },
    templateUrl: 'src/templates/videoList.html' 
  };
});
