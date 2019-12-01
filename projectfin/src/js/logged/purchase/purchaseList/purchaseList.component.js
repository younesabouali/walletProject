(function() {
  "use strict";
  angular.module("purchaseList").component("purchaseList", {
    templateUrl:
      "/src/js/logged/purchase/purchaseList/purchaseList.template.html",
    controller: purchaseListController
  });
  purchaseListController.$inject = ["PurchaseService"];
  function purchaseListController(PurchaseService) {
    const $ctrl = this;
    PurchaseService.get().then(res => ($ctrl.data = res));
    $ctrl.btn = "show Purchases";
    $ctrl.toggle = function() {
      if ($ctrl.show === true) {
        $ctrl.btn = "show Purchases";
      } else {
        $ctrl.btn = "hide Purchases";
      }
      $ctrl.show = !$ctrl.show;
    };
    $ctrl.remove = function(id) {
      PurchaseService.delete(id).then(function(res) {
        console.log(res);
      });
    };
  }
})();
