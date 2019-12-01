(function() {
  // "use strict";

  angular.module("wallet", [
    "logged",
    "commonComponent",
    "ui.router",
    "angular-jwt",
    "PaimentService",
    "PurchaseService",
    "UserService"
  ]);
})();
