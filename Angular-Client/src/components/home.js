angular.module('app')

  .component('home', {
    bindings: {},
    controller: (search) => {
      this.input = '';
      this.filter = search.filter;
    },
    templateUrl: '/src/templates/home.html',
  });
