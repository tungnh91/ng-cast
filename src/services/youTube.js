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

      var getViewCount = function(id) {
        $http({
          method: 'GET',
          url: 'https://www.googleapis.com/youtube/v3/videos',
          params: {
            key: window.YOUTUBE_API_KEY,
            id: id,
            part: 'statistics'
          }
        }).then(function success({data}) {
          console.log('statistics data', data);
        }, function error(response) {
          console.log(response);
        });
      };
      for(var i=0; i < 5; i++){
        getViewCount(data.items[i].id.videoId);
        
      }
      



    }, function errorCallback(response) {

    });
  };
});
