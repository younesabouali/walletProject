(function() {
  "use strict";
  angular.module("warningPurchase").component("warningPurchase", {
    templateUrl:
      "/src/js/logged/warningPurchase/warningPurchaseElement/warningPurchase.template.html",
    controller: warningPurchaseController,
    bindings: {
      item: "<"
    }
  });
  function warningPurchaseController() {
    const $ctrl = this;
  }
})();
