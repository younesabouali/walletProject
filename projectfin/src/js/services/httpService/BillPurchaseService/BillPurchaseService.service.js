(function() {
  "use strict";
  angular
    .module("BillPurchaseService")
    .service("BillPurchaseService", BillPurchaseService);
  BillPurchaseService.$inject = ["http", "jwtHelper"];
  function BillPurchaseService(http, jwtHelper) {
    const service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = function() {
      return http.get("billsPurchase");
    };
    service.add = async function(body) {
      const res = await http.post("billsPurchase/" + tokenPayload.id, body);
      return res;
    };
    service.update = async function(details) {
      return http.put("billsPurchase/" + details.id, details.body);
    };
    service.delete = async function(details) {
      const res = await http.delete("billsPurchase/" + details);
      return res;
    };
  }
})();
