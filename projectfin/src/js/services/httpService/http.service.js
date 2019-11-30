(function() {
  "use strict";
  angular
    .module("http", [])
    .service("http", http)
    .run(function($http) {
      $http.defaults.headers.common.token = localStorage.getItem("token");
    });
  http.$inject = ["$http"];
  function http($http) {
    const http = this;
    http.url = "http://localhost:3020/api/";
    http.get = function(details) {
      return $http({
        method: "GET",
        url: http.url + details
      });
    };
    http.post = function(details) {
      return $http.post(http.url + details.link, details.body);
    };
    http.put = function(details) {
      return $http.put(http.url + details.link, details.body);
    };
    http.delete = function(details) {
      return $http.delete(http.url + details);
    };
  }
})();
