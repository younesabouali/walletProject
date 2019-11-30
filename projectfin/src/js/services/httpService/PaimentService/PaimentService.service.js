(function() {
  "use strict";
  angular.module("PaimentService").service("PaimentService", PaimentService);
  PaimentService.$inject = ["http", "jwtHelper"];
  function PaimentService(http, jwtHelper) {
    var service = this;
    var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

    service.get = async function() {
      const res = await http.get("paiments");
      return res;
    };
    service.add = async function(body) {
      const res = await http.post({ link: "paiments", body });
      return res;
    };

    service.update = async function(details) {
      return http.put("paiments/" + details.id, details.body);
    };
    service.delete = async function(details) {
      const res = await http.delete("paiments/" + details);
      return res;
    };
  }
})();
