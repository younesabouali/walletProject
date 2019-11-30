(function() {
  "use strict";
  angular.module("ProviderService").service("ProviderService", ProviderService);
  ProviderService.$inject = ["http", "jwtHelper"];
  function ProviderService(http, jwtHelper) {
    const service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = function() {
      return http.get("providers");
    };
    service.add = async function(body) {
      const res = await http.post("providers/" + tokenPayload.id, body);
      return res;
    };
    service.update = async function(details) {
      return http.put("providers/" + details.id, details.body);
    };
    service.delete = async function(details) {
      const res = await http.delete("providers/" + details);
      return res;
    };
  }
})();
