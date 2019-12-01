(function() {
  "use strict";
  angular.module("StatusService").service("StatusService", StatusService);
  StatusService.$inject = ["http", "jwtHelper"];
  function StatusService(http, jwtHelper) {
    var service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));
    service.getStatuses = function() {
      return http.get("status//MonthDetail").then(res => res.data);
    };
  }
})();
