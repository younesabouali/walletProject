(function() {
  "use strict";
  angular.module("providerList").component("providerList", {
    templateUrl:
      "/src/js/logged/provider/providerList/providerList.template.html",
    controller: providerList
  });
  providerList.$inject = ["ProviderService"];
  function providerList(ProviderService) {
    const $ctrl = this;
    $ctrl.$onInt = ProviderService.get().then(function(res) {
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
      ProviderService.delete(id).then(function(res) {
        console.log(res);
      });
    };
  }
})();
