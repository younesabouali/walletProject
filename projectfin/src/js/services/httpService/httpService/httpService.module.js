(function() {
  "use strict";
  angular.module("httpFactory", []).factory(httpFactory);
  // .run(function($http) {
  //   $http.defaults.headers.common.token = jwtHelper.decodeToken(
  //     localStorage.getItem("token")
  //   );
  // });
  httpFactory.$inject = ["$http"];
  // function httpFactory($http) {
  //   var service = this;
  //   service.userId = "72fdcd5d-6ec8-4418-b754-ec716f3eba70";
  // }
})();
