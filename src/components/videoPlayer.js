angular.module('video-player')

.directive('videoPlayer', function() {
  return {
    scope: {
      video: '<'

    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      $scope.getYouTubeUrl = function(videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
      };
      console.log('videoPlayer scope:', $scope);
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
