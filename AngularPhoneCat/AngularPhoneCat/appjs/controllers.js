//Controller Module
var phonecatApp = angular.module("phonecatControllers", []);

//Phone List Controller
phonecatApp.controller("PhoneListController", ["$scope", "Phone", 
    function ($scope, Phone) {
        //$http.get("phones/phones.json").success(function (data) {
        //    $scope.phones = data;
        //});
        $scope.phones = Phone.query();
        $scope.orderProp = "age";
}]);

//Phone Detail Controller
phonecatApp.controller("PhoneDetailController", ["$scope", "$routeParams", "Phone",
    function ($scope, $routeParams, Phone) {
        //$http.get("phones/" + $routeParams.phoneId + ".json")
        //    .success(function (data) {
        //        $scope.phone = data;
        //        $scope.mainImageUrl = data.images[0];
        //    });
        $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function (phone) {
            $scope.mainImageUrl = phone.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
}]);