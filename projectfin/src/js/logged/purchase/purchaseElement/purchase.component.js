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
  purchaseController.$inject = ["$stateParams", "PurchaseService"];
  function purchaseController($stateParams, PurchaseService) {
    const $ctrl = this;
    // $ctrl.$onInit = PurchaseService.getById($stateParams.id).then(res => {
    //   $ctrl.item = res.data;
    // });
  }
})();
