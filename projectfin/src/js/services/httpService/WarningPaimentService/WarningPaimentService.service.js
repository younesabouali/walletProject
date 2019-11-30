(function() {
  "use strict";
  angular
    .module("WarningPaimentService")
    .service("WarningPaimentService", WarningPaimentService);
  WarningPaimentService.$inject = ["http"];
  function WarningPaimentService(http) {
    const service = this;

    service.get = function() {
      return http.get("billsPaiment/warnings");
    };
  }
})();
