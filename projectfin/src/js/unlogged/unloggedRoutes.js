(function() {
  "use strict";

  angular.module("unlogged").config(RoutesUnloggedConfig);
  RoutesUnloggedConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesUnloggedConfig($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state("unlogged.login", {
        url: "/login",
        templateUrl: "src/views/login.html"
      })
      .state("unlogged.register", {
        url: "/register",
        templateUrl: "src/views/register.html"
      });
  }
})();
