angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(newQuery) {
    var request = $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        type: 'video',
        videoEmbeddable: true,
        key: window.YOUTUBE_API_KEY,
        maxResults: newQuery.max || 5,
        q: newQuery.query,
      }
    }).success(function(data, status) {
      console.log('AJAX data:', data);
    }).error(function(data, status) {

    });
  };

  return {search: this.search};
});
