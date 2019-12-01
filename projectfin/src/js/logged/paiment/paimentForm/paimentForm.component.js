(function() {
  "use strict";
  angular.module("paimentForm").component("paimentForm", {
    templateUrl: "/src/js/logged/paiment/paimentForm/paimentForm.template.html",
    controller: paimentFormController
  });
  paimentFormController.$inject = ["PaimentService"];
  function paimentFormController(PaimentService, $location) {
    const $ctrl = this;
    $ctrl.addPaiment = function() {
      console.log("paiment");
      PaimentService.add({
        detail: $ctrl.body.detail,
        client: $ctrl.body.client,
        amount: $ctrl.body.amount,
        Date: $ctrl.body.Date,
        type: $ctrl.body.type
      });
    };
  }
})();
