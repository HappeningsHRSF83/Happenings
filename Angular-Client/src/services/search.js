angular.module('app')
  .service('search', function go($http, landingRedirector) {
    this.result = [];
    this.filter = (input) => {
      $http.get(`/search/${landingRedirector.city}/${input}`)
        .then((response) => {
          console.log('Successfully sent get to search route.');
          this.result = response.data;
          console.log(this.result);
        })
        .catch(() => {
          console.log('Failed to send get request');
        });
    };
    this.save = function save(post, cb) {
      $http.post('/save', post)
        .then((response) => {
          console.log('Successfully saved your post!', response);
          landingRedirector.redirectHome(post.city);
          cb('home');
        })
        .catch((err) => {
          console.log(err);
        });
    };
  });
