angular.module('video-player')
.directive('app', function() {
  return {
    scope: {
      selectVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, $window) {
      this.exampleVideoData = $window.exampleVideoData;
      this.video = $window.exampleVideoData[0];
      this.clickHandler = function() {

      };
      this.selectVideo = function() {

      };
      console.log('this is the app this', this);
    },
    templateUrl: 'src/templates/app.html'
  };
});