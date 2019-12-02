(function() {
  "use strict";
  angular.module("UserService").service("UserService", UserService);

  UserService.$inject = ["http", "jwtHelper", "$location"];
  function UserService(http, jwtHelper, $location) {
    var service = this;

    service.register = function(body) {
      http.post({ link: "users", body }).then(res => {
        localStorage.setItem("token", res.data);
        var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

        $location.path("/main");
        return tokenPayload;
      });
    };
    service.authToken = function() {
      try {
        jwtHelper.decodeToken(localStorage.getItem("token"));
      } catch (error) {
        return;
      }

      return;
    };
    service.getToken = function() {
      try {
        return jwtHelper.decodeToken(localStorage.getItem("token"));
      } catch (error) {
        $location.path("/login").replace();
      }
    };
    service.login = function(body) {
      http.post({ link: "auth", body }).then(res => {
        localStorage.setItem("token", res.data);
        var tokenPayload = jwtHelper.decodeToken(localStorage.getItem("token"));

        $location.path("/main");
        return tokenPayload;
      });
    };
    service.logout = function() {
      localStorage.removeItem("token");
      $location.path("/login").replace();
    };
  }
})();
