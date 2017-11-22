angular.module('app')

  .component('home', {
    bindings: {},
    controller: (search) => {
      this.filter = search.filter;
    },
    templateUrl: '/src/templates/home.html',
  });
