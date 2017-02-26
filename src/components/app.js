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

      this.searchService = youTube;
      this.selectVideo = (movie) => {
        this.currentVideo = movie;
      };
      
      this.searchResults = (data) => {
        this.videos = data;
        this.currentVideo = data[0];
      };
      youTube.search('Snoop Dogg', this.searchResults);
      console.log('this is the app this', this);
    },
    templateUrl: 'src/templates/app.html'
  };
});