(function() {
  "use strict";
  angular.module("purchase").component("purchase", {
    templateUrl:
      "/src/js/logged/purchase/purchaseElement/purchase.template.html",
    controller: purchaseController,
    bindings: {
      item: "<",
      onRemove: "&"
    }
  });
  function purchaseController() {
    const $ctrl = this;
  }
})();
