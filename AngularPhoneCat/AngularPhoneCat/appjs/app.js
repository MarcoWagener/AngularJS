//PhonecatApp Module
var phonecatApp = angular.module("phonecatApp", [
    "ngRoute",
    "phonecatControllers",
    "phonecatFilters",
    "phonecatServices",
    "phonecatAnimations"
]);

//Route configuration
phonecatApp.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/phones", {
                templateUrl: "partials/phone-list.html",
                controller: "PhoneListController"
            })
            .when("/phones/:phoneId", {
                templateUrl: "partials/phone-detail.html",
                controller: "PhoneDetailController"
            })
            .otherwise({
                redirectTo: "/phones"
            });
    }]);