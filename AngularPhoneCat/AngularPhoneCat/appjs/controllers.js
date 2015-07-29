//Controller Module
var phonecatApp = angular.module("phonecatControllers", []);

//Phone List Controller
phonecatApp.controller("PhoneListController", ["$scope", "$http", 
    function ($scope, $http) {
        $http.get("phones/phones.json").success(function (data) {
            $scope.phones = data;
        });

        $scope.orderProp = "age";
}]);

//Phone Detail Controller
phonecatApp.controller("PhoneDetailController", ["$scope", "$routeParams", "$http",
    function ($scope, $routeParams, $http) {
        $http.get("phones/" + $routeParams.phoneId + ".json")
            .success(function (data) {
                $scope.phone = data;
            });
}]);