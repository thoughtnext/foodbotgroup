(function() {
  angular.module('app')
    .config(function($routeProvider, $locationProvider, $mdThemingProvider) {
      $routeProvider
       // .when('/', {
       //    // controller: 'createGroup',
       //    templateUrl: './app/templates/login.html'
       //  })
        .when('/',{
          controller: 'createGroup',
          templateUrl: './app/templates/createGroup.html'
        })
        
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      })
    })
})();
