angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(newQuery, callback) {
    var request = $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        type: 'video',
        videoEmbeddable: true,
        key: window.YOUTUBE_API_KEY,
        maxResults: 5,
        q: newQuery,
        part: 'snippet'
      }
    }).then(function successCallback({data}) {
      console.log('AJAX data:', data);
      callback(data.items);
      // callback(data);
    }, function errorCallback(response) {

    });
  };
});
