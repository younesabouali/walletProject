(function() {
  "use strict";

  angular.module("wallet").controller("routesController", routesController);
  routesController.$inject = ["item"];
  function routesController(item) {
    const $ctrl = this;
    $ctrl.item = item;
  }
})();
