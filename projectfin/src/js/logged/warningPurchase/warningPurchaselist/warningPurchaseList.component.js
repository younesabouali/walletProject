(function() {
  "use strict";
  angular.module("warningPurchaseList").component("warningPurchaseList", {
    templateUrl:
      "/src/js/logged/warningPurchase/warningPurchaseList/warningPurchaseList.template.html",
    controller: warningPurchaseListController
  });
  warningPurchaseListController.$inject = ["WarningPurchaseService"];
  function warningPurchaseListController(WarningPurchaseService) {
    const $ctrl = this;
    $ctrl.$onInt = WarningPurchaseService.get().then(function(res) {
      $ctrl.data = res.data;
    });
  }
})();
