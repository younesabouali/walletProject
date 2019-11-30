(function() {
  "use strict";
  angular.module("myOptions").component("myOptions", {
    templateUrl: "/src/js/commonComponent/options/options.template.html",
    controller: myOptionsController,
    bindings: {
      name: "@",
      values: "<",
      declareValue: "&"
    }
  });
  function myOptionsController() {
    var $ctrl = this;
  }
})();
