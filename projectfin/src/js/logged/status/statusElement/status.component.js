(function() {
  "use strict";
  angular.module("status").component("status", {
    templateUrl: "/src/js/logged/status/statusElement/status.template.html",
    controller: statusController,
    bindings: {
      item: "<"
    }
  });
  function statusController() {}
})();
