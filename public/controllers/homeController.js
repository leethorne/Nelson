app.controller("homeController", function ($scope, $state, $stateParams, homeService) {

    homeService.getTeachers()
    .then(function(response) {
        console.log(response.data.teacherList)
        $scope.teachers = response.data.teacherList
    }, function(error) {
        console.log(error)
        alert("Sorry! Something went wrong...")
    })


    $scope.addReport = function () {
        console.log("in add report")
        homeService.addReport($scope.report)
            .then(function (response) {
                console.log("RES report: ", response)
            }, function (error) {
                console.log(error)
                alert("Sorry! Something went wrong...")
            })
    }

})