(function() {
  "use strict";

  angular.module("wallet").config(RoutesConfig);
  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouteProvider) {
    $urlRouteProvider.otherwise("/login");
    $stateProvider
      .state("login", {
        url: "/login",
        templateUrl: "src/views/login.html"
      })
      .state("register", {
        url: "/register",
        templateUrl: "src/views/register.html"
      })
      .state("main", {
        url: "/main",
        templateUrl: "src/views/main.html"
      })
      .state("main.paiments", {
        url: "/paiments",
        templateUrl: "src/views/paiments.html"
      })
      .state("main.paiment", {
        url: "/paiment",
        templateUrl: "src/views/paiment.html"
      })
      .state("main.billsPurchase", {
        url: "/billsPurchase",
        templateUrl: "src/views/billsPurchase.html"
      })
      .state("main.bills", {
        url: "/bills",
        templateUrl: "src/views/bills.html"
      })
      .state("main.clients", {
        url: "/clients",
        templateUrl: "src/views/clients.html"
      })
      .state("main.providers", {
        url: "/providers",
        templateUrl: "src/views/providers.html"
      })
      .state("main.purchases", {
        url: "/purchases",
        templateUrl: "src/views/purchases.html"
      })
      .state("main.purchase", {
        url: "/purchase",
        templateUrl: "src/views/purchase.html"
      })
      .state("main.status", {
        url: "/status",
        templateUrl: "src/views/status.html"
      })
      .state("main.formPaiment", {
        url: "/formPaiment",
        templateUrl: "src/views/formPaiment.html"
      })
      .state("main.formPurchase", {
        url: "/formPurchase",
        templateUrl: "src/views/formPurchase.html"
      });
  }
})();
