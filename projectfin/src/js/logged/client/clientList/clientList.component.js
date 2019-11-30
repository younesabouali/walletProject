(function() {
  "use strict";
  angular.module("clientList").component("clientList", {
    templateUrl: "/src/js/logged/client/clientList/clientList.template.html",
    controller: clientList
  });
  clientList.$inject = ["ClientService"];
  function clientList(ClientService) {
    const $ctrl = this;
    $ctrl.$onInt = ClientService.get().then(function(res) {
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
      ClientService.delete(id).then(function(res) {
        console.log(res);
      });
    };
  }
})();
