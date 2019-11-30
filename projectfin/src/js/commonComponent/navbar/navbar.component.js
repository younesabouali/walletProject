(function() {
  "use strict";
  angular.module("navbar").component("navbar", {
    templateUrl: "src/js/commonComponent/navbar/navbar.template.html",
    controller: navbarController
  });
  navbarController.$inject = ["UserService"];
  function navbarController(UserService) {
    const $ctrl = this;
    $ctrl.logout = function() {
      UserService.logout();
    };
  }
})();
