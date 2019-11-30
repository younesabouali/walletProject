(function() {
  "use strict";
  angular.module("warningPaimentList").component("warningPaimentList", {
    templateUrl:
      "/src/js/logged/warningPaiment/warningPaimentList/warningPaimentList.template.html",
    controller: warningPaimentListController
  });
  warningPaimentListController.$inject = ["WarningPaimentService"];
  function warningPaimentListController(WarningPaimentService) {
    const $ctrl = this;
    $ctrl.$onInt = WarningPaimentService.get().then(function(res) {
      $ctrl.data = res.data;
    });
    $ctrl.btn = "show Paiments";
    $ctrl.toggle = function() {
      if ($ctrl.show === true) {
        $ctrl.btn = "show Paiments";
      } else {
        $ctrl.btn = "hide Paiments";
      }
      $ctrl.show = !$ctrl.show;
    };
  }
})();
