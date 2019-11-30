(function() {
  "use strict";
  angular.module("BillService").service("BillService", BillService);
  BillService.$inject = ["http", "jwtHelper"];
  function BillService(http, jwtHelper) {
    const service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = function() {
      return http.get("billsPaiment");
    };
    service.add = async function(body) {
      const res = await http.post("billsPaiment/" + tokenPayload.id, body);
      return res;
    };
    service.update = async function(details) {
      return http.put("billsPaiment/" + details.id, details.body);
    };
    service.delete = async function(details) {
      const res = await http.delete("billsPaiment/" + details);
      return res;
    };
  }
})();
