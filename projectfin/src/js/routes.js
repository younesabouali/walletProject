(function() {
  "use strict";

  angular.module("wallet").config(RoutesConfig);
  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise("/main");
    $stateProvider
      .state("unlogged", {
        abstracte: true,
        templateUrl: "src/views/unlogged.html",
        controller: "routesController as $ctrl",
        resolve: {
          auth: [
            "UserService",
            function(UserService) {
              return UserService.authToken();
            }
          ]
        }
      })

      .state("main", {
        url: "/main",
        templateUrl: "src/views/main.html",
        controller: "routesController as $ctrl",
        resolve: {
          auth: [
            "UserService",
            function(UserService) {
              return UserService.getToken();
            }
          ]
        }
      });
  }
})();
