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
            url: "/report",
            templateUrl: "./views/report.html",
            controller: "homeController"
        })
        .state("resource", {
            url: "/resources",
            templateUrl: "./views/resource.html",
            controller: "homeController"
        })
})