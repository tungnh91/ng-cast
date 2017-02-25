angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('videoListEntry scope:', $scope);
    },
    templateUrl: 'src/templates/videoListEntry.html'
  };
});
