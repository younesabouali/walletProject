(function() {
  "use strict";
  angular.module("billPurchaseList").component("billPurchaseList", {
    templateUrl:
      "/src/js/logged/billPurchase/billPurchaseList/billPurchaseList.template.html",
    controller: billPurchaseListController
  });
  billPurchaseListController.$inject = ["BillPurchaseService"];
  function billPurchaseListController(BillPurchaseService, $scope) {
    const $ctrl = this;
    $ctrl.$onInt = BillPurchaseService.get().then(function(res) {
      $ctrl.data = res.data;
    });
    $ctrl.btn = "show";
    $ctrl.toggle = function() {
      if ($ctrl.show === true) {
        $ctrl.btn = "show";
      } else {
        $ctrl.btn = "hide";
      }
      $ctrl.show = !$ctrl.show;
    };
    $ctrl.remove = function(id) {
      BillPurchaseService.delete(id).then(function(res) {
        console.log(res);
      });
    };
  }
})();
