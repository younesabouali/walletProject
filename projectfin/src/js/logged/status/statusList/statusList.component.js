(function() {
  "use strict";
  angular.module("statusList").component("statusList", {
    templateUrl: "/src/js/logged/status/statusList/statusList.template.html",
    controller: statusListController
  });
  statusListController.$inject = ["StatusService"];
  function statusListController(StatusService) {
    var $ctrl = this;
    StatusService.getStatuses().then(res => ($ctrl.data = res));
  }
})();
