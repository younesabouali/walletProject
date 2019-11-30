(function() {
  "use strict";
  angular.module("UserService").service("UserService", UserService);

  UserService.$inject = ["http", "jwtHelper", "$location"];
  function UserService(http, jwtHelper, $location) {
    var service = this;

    service.register = async function(body) {
      const res = await http.post({ link: "users", body });
      localStorage.setItem("token", res.data);
      var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

      $location.path("/main");
      return tokenPayload;
    };
    service.login = async function(body) {
      const res = await http.post({ link: "auth", body });

      localStorage.setItem("token", res.data);
      var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

      $location.path("/main");
      return tokenPayload;
    };
    service.logout = function() {
      localStorage.removeItem("token");
      $location.path("/login").replace();
    };
  }
})();
