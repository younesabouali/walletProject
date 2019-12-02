(function() {
  "use strict";

  angular.module("wallet").controller("routesController", routesController);
  routesController.$inject = ["auth"];
  function routesController(auth) {
    const $ctrl = this;
    $ctrl.auth = auth;
  }
})();
