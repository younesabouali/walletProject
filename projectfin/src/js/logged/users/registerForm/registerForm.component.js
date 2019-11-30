(function() {
  "use strict";
  angular.module("registerForm").component("registerForm", {
    templateUrl: "/src/js/logged/users/registerForm/registerForm.template.html",

    controller: registerFormController
  });
  registerFormController.$inject = ["UserService"];
  function registerFormController(UserService) {
    var $ctrl = this;

    $ctrl.register = function() {
      UserService.register({
        name: $ctrl.body.name,
        email: $ctrl.body.email,
        password: $ctrl.body.password
      }).then(res => ($ctrl.data = res));
    };
  }
})();
