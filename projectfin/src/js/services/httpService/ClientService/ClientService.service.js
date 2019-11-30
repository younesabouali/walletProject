(function() {
  "use strict";
  angular.module("ClientService").service("ClientService", ClientService);
  ClientService.$inject = ["http", "jwtHelper"];
  function ClientService(http, jwtHelper) {
    const service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = function() {
      return http.get("clients");
    };
    service.add = async function(body) {
      const res = await http.post("clients/" + tokenPayload.id, body);
      return res;
    };
    service.update = async function(details) {
      return http.put("clients/" + details.id, details.body);
    };
    service.delete = async function(details) {
      const res = await http.delete("clients/" + details);
      return res;
    };
  }
})();
