(function() {
  "use strict";
  angular.module("billList").component("billList", {
    templateUrl: "/src/js/logged/billPaiment/billList/billList.template.html",
    controller: billListController
  });
  billListController.$inject = ["BillService"];
  function billListController(BillService, $scope) {
    const $ctrl = this;
    $ctrl.$onInt = BillService.get().then(function(res) {
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
      BillService.delete(id).then(function(res) {
        console.log(res);
      });
    };
  }
})();
