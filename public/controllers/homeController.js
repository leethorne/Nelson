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
                alert("Your anonymous report has been sent to the Principal. Thank you!")
            }, function (error) {
                console.log(error)
                alert("Sorry! Something went wrong...")
            })
    }

    $scope.sendEmail = function() {
        console.log("in send email")
        homeService.sendEmail($scope.report)
            .then(function (response) {
                console.log("EMAIL Info for report: ", response)
            }, function (error) {
                console.log(error)
                alert("Sorry! Something went wrong...")
            })
    }

})