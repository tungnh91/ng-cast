angular.module('video-player')

.directive('search', function() {
  return {
    scope: {
      result: '<',
      // onButtonClick: '<',
      service: '<'
    },
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function($scope) {
      console.log('search $scope: ', $scope);

      this.handleClick = () => {
        this.service.search(this.searchModel, (data) => {
          this.result(data);
        });
      };
    },
    templateUrl: 'src/templates/search.html'
  };
});
