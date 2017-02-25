angular.module('video-player')
.directive('app', function() {
  return {
    scope: {
      // selectVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, $window, youTube) {
      var options = {query: 'dogs', max: 5};
      youTube.search(options, function(){});
      this.videos = $window.exampleVideoData;
      this.currentVideo = $window.exampleVideoData[0];
      this.clickHandler = function() {

      };
      this.selectVideo = function() {

      };
      this.searchResults = function() {

      };
      console.log('this is the app this', this);
    },
    templateUrl: 'src/templates/app.html'
  };
});