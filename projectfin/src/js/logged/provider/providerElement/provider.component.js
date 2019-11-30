(function() {
  "use strict";
  angular.module("provider").component("provider", {
    templateUrl:
      "/src/js/logged/provider/providerElement/provider.template.html",
    controller: providerController,
    bindings: {
      item: "<",
      onRemove: "&"
    }
  });
  function providerController() {
    var $ctrl = this;
  }
})();
