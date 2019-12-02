(function() {
  // "use strict";

  angular.module("wallet", [
    "logged",
    "unlogged",
    "commonComponent",
    "ui.router",
    "angular-jwt",
    "UserService"
  ]);
})();
