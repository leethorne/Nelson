app.controller("homeController", function ($scope, $state, $stateParams, homeService) {

    homeService.getTeachers()
    .then(function(response) {
        console.log(response)
    }, function(error) {
        console.log(error)
        alert("Sorry! Something went wrong...")
    })

})