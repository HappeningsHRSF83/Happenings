angular.module('app')
  .service('search', ($http) => {
    this.filter = (parameter) => {
      $http.post('search', parameter).then((responce) => {
        console.log('search succeeded');
        console.log(responce);
      }, (responce) => {
        console.log('search failed');
        console.log(responce);
      });
    };
  });
