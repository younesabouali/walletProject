(function() {
  "use strict";
  angular.module("PaimentService").service("PaimentService", PaimentService);
  PaimentService.$inject = ["http", "$location"];
  function PaimentService(http, $location) {
    var service = this;
    service.getById = function(id) {
      return http.get("paiments/" + id).then(res => res.data);
    };
    service.get = function() {
      return http.get("paiments").then(res => res.data);
    };
    service.add = function(body) {
      return http
        .post({ link: "paiments", body })
        .then(() => $location.path("/main").replace());
    };

    service.update = function(details) {
      return http
        .put("paiments/" + details.id, details.body)
        .then(res => res.data);
    };
    service.delete = function(details) {
      return http.delete("paiments/" + details).then(res => res.data);
    };
  }
})();
