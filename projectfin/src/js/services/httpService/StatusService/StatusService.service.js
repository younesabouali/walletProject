(function() {
  "use strict";
  angular.module("StatusService").service("StatusService", StatusService);
  StatusService.$inject = ["http"];
  function StatusService(http) {
    var service = this;
    service.getStatuses = function() {
      return http.get("status//MonthDetail").then(res => res.data);
    };
  }
})();
