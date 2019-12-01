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
          item: [
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
          item: [
            "UserService",
            function(UserService) {
              return UserService.getToken();
            }
          ]
        }
      })
      .state("unlogged.login", {
        url: "/login",
        templateUrl: "src/views/login.html"
      })
      .state("unlogged.register", {
        url: "/register",
        templateUrl: "src/views/register.html"
      })
      .state("main.paiment", {
        url: "/paiment/:id",
        templateUrl: "src/views/paiment.html",
        controller: "routesController as $ctrl",
        resolve: {
          item: [
            "$stateParams",
            "PaimentService",
            function($stateParams, PaimentService) {
              console.log("object", PaimentService.getById($stateParams.id));

              return PaimentService.getById($stateParams.id);
            }
          ]
        }
      })
      .state("main.purchases", {
        url: "/purchases",
        templateUrl: "src/views/purchases.html"
      })
      .state("main.purchase", {
        url: "/purchase/:id",
        templateUrl: "src/views/purchase.html",
        controller: "routesController as $ctrl",
        resolve: {
          item: [
            "$stateParams",
            "PurchaseService",
            function($stateParams, PurchaseService) {
              return PurchaseService.getById($stateParams.id);
            }
          ]
        }
      })

      .state("main.paiments", {
        url: "/paiments",
        templateUrl: "src/views/paiments.html"
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
