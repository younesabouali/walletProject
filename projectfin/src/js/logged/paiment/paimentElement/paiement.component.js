(function() {
  "use strict";
  angular.module("paiment").component("paiment", {
    templateUrl: "/src/js/logged/paiment/paimentElement/paiment.template.html",
    controller: paimentController,
    bindings: {
      item: "<",
      onRemove: "&"
    }
  });
  function paimentController() {
    const $ctrl = this;
  }
})();
