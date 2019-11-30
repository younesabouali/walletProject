(function() {
  "use strict";
  angular.module("loginForm").component("loginForm", {
    templateUrl: "/src/js/logged/users/loginForm/loginForm.template.html",
    controller: loginFormController
  });
  loginFormController.$inject = ["UserService"];
  function loginFormController(UserService) {
    const $ctrl = this;
    $ctrl.login = function() {
      UserService.login({
        email: $ctrl.body.email,
        password: $ctrl.body.password
      }).then(res => ($ctrl.data = res));
    };
  }
})();
