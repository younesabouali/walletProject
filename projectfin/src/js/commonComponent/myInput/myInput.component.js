(function() {
  "use strict";
  angular.module("myInput").component("myInput", {
    templateUrl: "/src/js/commonComponent/myInput/myInput.template.html",
    controller: myInputController,
    bindings: {
      name: "@",
      type: "@",
      form: "@",
      declareValue: "&"
    }
  });
  function myInputController() {
    var $ctrl = this;
  }
})();
