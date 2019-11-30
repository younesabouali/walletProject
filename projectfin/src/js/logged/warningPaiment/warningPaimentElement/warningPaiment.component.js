(function() {
  "use strict";
  angular.module("warningPaiment").component("warningPaiment", {
    templateUrl:
      "/src/js/logged/warningPaiment/warningPaimentElement/warningPaiment.template.html",
    controller: warningPaimentController,
    bindings: {
      item: "<"
    }
  });
  function warningPaimentController() {
    const $ctrl = this;
  }
})();
