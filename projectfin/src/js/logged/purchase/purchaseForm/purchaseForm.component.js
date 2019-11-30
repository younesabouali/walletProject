(function() {
  "use strict";
  angular.module("purchaseForm").component("purchaseForm", {
    templateUrl:
      "/src/js/logged/purchase/purchaseForm/purchaseForm.template.html",
    controller: purchaseFormController
  });
  purchaseFormController.$inject = ["PurchaseService", "$location"];
  function purchaseFormController(PurchaseService, $location) {
    const $ctrl = this;
    $ctrl.addPurchase = function() {
      PurchaseService.add({
        detail: $ctrl.body.detail,
        provider: $ctrl.body.provider,
        amount: $ctrl.body.amount,
        Date: $ctrl.body.Date,
        type: $ctrl.body.type
      }).then(() => $location.path("/main").replace());
    };
  }
})();
