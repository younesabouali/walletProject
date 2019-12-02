(function() {
  "use strict";

  angular
    .module("logged")
    .controller("routesLoggedController", routesLoggedController);
  routesLoggedController.$inject = ["item"];
  function routesLoggedController(item) {
    const $ctrl = this;
    $ctrl.item = item;
  }
})();
