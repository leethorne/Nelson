var app = angular.module("nelsonApp", ["ui.router"])

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "./views/home.html",
            controller: "homeController"
        })
        .state("report", {
            url: "/",
            templateUrl: "./views/report.html",
            controller: "reportController"
        })
        .state("resource", {
            url
        })
})