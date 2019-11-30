(function() {
  "use strict";
  angular
    .module("WarningPurchaseService")
    .service("WarningPurchaseService", WarningPurchaseService);
  WarningPurchaseService.$inject = ["http"];
  function WarningPurchaseService(http) {
    const service = this;

    service.get = function() {
      return http.get("billsPurchase/warnings");
    };
  }
})();
