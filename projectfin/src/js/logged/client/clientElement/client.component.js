(function() {
  "use strict";
  angular.module("client").component("client", {
    templateUrl: "/src/js/logged/client/clientElement/client.template.html",
    controller: clientController,
    bindings: {
      item: "<",
      onRemove: "&"
    }
  });
  function clientController() {
    // var $ctrl = this;
    // $ctrl.red = "hello";
  }
})();
