
// var app = angular.module('myApp', []);
// app.controller('customersCtrl', function($scope, $http) {
//     $http.get("http://www.w3schools.com/angular/customers.php")
//     .then(function (response) {$scope.names = response.data.records;});
// });

angular.module('myAppName',[])
    .controller('AppCtrl', function($scope,$http) {
        
        $http.get('/contactList').success(function(response){
            console.log('I got the data');
            $scope.contactList = response;
        });

       
        // $scope.contactList = contactList;
        // console.log('Hello World from Controller' + JSON.stringify(contactList));

        // let names = [];
        // $http.get("http://www.w3schools.com/angular/customers.php")
        // .then(function (response) {$scope.names = response.data.records;});
        // console.log('Hello World from Controller' + JSON.stringify(names));
    });

// function AppCtrl() {
//     console.log('Hello World from Controller');
// }