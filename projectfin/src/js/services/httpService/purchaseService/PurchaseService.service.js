(function() {
  "use strict";
  angular.module("PurchaseService").service("PurchaseService", PurchaseService);
  PurchaseService.$inject = ["http", "jwtHelper"];
  function PurchaseService(http, jwtHelper) {
    var service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = async function() {
      const res = await http.get("purchases");
      return res;
    };
    service.add = async function(body) {
      const res = await http.post({ link: "purchases", body });
      return res;
    };

    service.update = async function(details) {
      return http.put("purchases/" + details.id, details.body);
    };
    service.delete = async function(details) {
      const res = await http.delete("purchases/" + details);
      return res;
    };
  }
})();
