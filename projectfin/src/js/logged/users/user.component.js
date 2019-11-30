(function() {
  "use strict";
  angular.module("User").component("user", {
    templateUrl: "/src/js/logged/users/user.template.html",
    controller: userController
  });
  userController.$inject = ["jwtHelper"];
  function userController(jwtHelper) {
    const $ctrl = this;
    $ctrl.tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));
  }
})();
