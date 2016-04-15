(function() {
  "use strict";

  angular.module('app').controller("RoutesTabController", RoutesTabController);

  RoutesTabController.$inject = ["$scope", "$log", "$http", "$timeout"];

  function RoutesTabController($scope, $log, $http, $timeout) {
    $scope.temperature = '';

$scope.iconClass = "wi-night-clear";
    function setWeatherIcon(actualId, sunrise, sunset) {
      var id = actualId / 100;
      var isDay = true;
      var currentTime = new Date().getTime();
      if (currentTime >= sunrise && currentTime < sunset) {
        isDay = true;
      } else {
        isDay = false;
      }
      if (actualId === 800) {
        if (isDay) {
          $scope.iconClass = "wi-day-sunny";
        } else {
          $scope.iconClass = "wi-night-clear";
        }
        return;
      }
        switch (id) {
          case 2:
            $scope.iconClass = "wi-thunderstorm";
            break;
          case 3:
          $scope.iconClass = "wi-showers";
            break;
          case 7:
          $scope.iconClass = "wi-fog";
            break;
          case 8:
          $scope.iconClass = "wi-cloudy";
            break;
          case 6:
          $scope.iconClass = "wi-snow";
            break;
          case 5:
          $scope.iconClass = "wi-rain";
            break;
          case 9:
          $scope.iconClass = "wi-tornado";
          break;

        }
        $scope.$apply();
      }


    function getWeather() {

      var apiKey = 'dff13526e6fd3e06e534646075eeb74d';
      var url = "http://api.openweathermap.org/data/2.5/weather";
      var params = {
        zip: '28211,us',
        apikey: apiKey,
        units: 'imperial',
        callback: 'JSON_CALLBACK'
      };


      $http.jsonp(url, {
          params: params
        })
        .success(function(data, status, headers, config) {
          $log.log("success : Weather");
          $scope.temperature = data.main.temp;
          $scope.weatherObj = data.weather[0];
          $scope.tempDescription = $scope.weatherObj.description;
          setWeatherIcon($scope.weatherObj.id, $scope.weatherObj.sunrise, $scope.weatherObj.sunset);
          var iconTemp = angular.element( document.querySelector('#iconTemp'));
          iconTemp.addClass($scope.iconClass);
        })
        .error(function(data, status, headers, config) {
          $log.log("errors : Weather");
        });

    }

    function getIcon() {
      return $scope.iconClass;
    }

    var getDirections = function() {
      var apiKey = 'AIzaSyBwL30VtxlKAORx7xc6Hr8kJRzIRl9Drqs';
      var url = 'https://maps.googleapis.com/maps/api/directions/json?parameters';
      var address1 = '3630 Sterling Magnolia Ct S, Charlotte, NC 28211';
      var address2 = '831 E Morehead St, Charlotte, NC 28211';
      var params = {
        key : apiKey,
        origin : address1,
        destination : address2,
        alternatives : true
      };

      $http(
        method : 'GET',
        url : url, {
          params: params
        })
        .success(function(data, status, headers, config) {
          $log.log("success : Maps");

        })
        .error(function(data, status, headers, config) {
          $log.log("errors : Maps");
        });
    };

    getWeather();
    getDirections();
  }

}());
