(function() {
  "use strict";
  angular.module("ProviderService").service("ProviderService", ProviderService);
  ProviderService.$inject = ["http"];
  function ProviderService(http) {
    const service = this;

    service.get = function() {
      return http.get("providers");
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
