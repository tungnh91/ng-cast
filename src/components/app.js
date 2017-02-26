angular.module('video-player')
.directive('app', function() {
  return {
    scope: {
      // selectVideo: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope, $window, youTube) {
      this.videos = $window.exampleVideoData;
      this.currentVideo = $window.exampleVideoData[0];
      var options = {query: 'dogs', max: 5};
      youTube.search(options, (movies) => {
        this.videos = movies;
        this.currentVideo = movies[0];
      });
      this.selectVideo = (movie) => {
        this.currentVideo = movie;
      };
      this.searchResults = function() {

      };
      console.log('this is the app this', this);
    },
    templateUrl: 'src/templates/app.html'
  };
});