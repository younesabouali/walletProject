(function() {
  "use strict";
  angular.module("billPurchase").component("billPurchase", {
    templateUrl:
      "/src/js/logged/billPurchase/billPurchaseElement/billPurchase.template.html",
    controller: billPurchaseController,
    bindings: {
      item: "<",
      onRemove: "&"
    }
  });
  function billPurchaseController() {
    const $ctrl = this;
  }
})();
