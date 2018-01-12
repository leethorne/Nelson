app.service("homeService", function ($http, $state) {

    this.getTeachers = function() {
        return $http.get('http://localhost:3000/api/v1/home/teacher')
    }

    this.addReport = function(report) {
        console.log(report)
        return $http.post('http://localhost:3000/api/v1/home/', report)
    }

    
})