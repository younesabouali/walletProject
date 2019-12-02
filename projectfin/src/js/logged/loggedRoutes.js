(function() {
  "use strict";

  angular.module("logged").config(RoutesLoggedConfig);
  RoutesLoggedConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesLoggedConfig($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state("main.paiment", {
        url: "/paiment/:id",
        templateUrl: "src/views/paiment.html",
        controller: "routesLoggedController as $ctrl",
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
        controller: "routesLoggedController as $ctrl",
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
