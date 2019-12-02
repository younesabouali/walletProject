(function() {
  "use strict";
  angular.module("PurchaseService").service("PurchaseService", PurchaseService);
  PurchaseService.$inject = ["http", "$location"];
  function PurchaseService(http, $location) {
    var service = this;
    service.getById = function(id) {
      return http.get("purchases/" + id).then(res => res.data);
    };
    service.get = function() {
      return http.get("purchases").then(res => res.data);
    };
    service.add = function(body) {
      return http
        .post({ link: "purchases", body })
        .then(() => $location.path("/main").replace());
    };

    service.update = function(details) {
      return http.put("purchases/" + details.id, details.body);
    };
    service.delete = async function(details) {
      return http.delete("purchases/" + details);
    };
  }
})();
