angular.module('myAppName',[])
    .controller('AppCtrl', function($scope) {
        


        let person1 = {
            name : 'sujit',
            email : 'sujitlkumbhar.gmail.com',
            contactNumber : '8308038255'
        }

        let person2 = {
            name : 'Ajit',
            email : 'ajitkumbhar.gmail.com',
            contactNumber : '9763442080'
        }

        let contactList = [];
        contactList.push(person1);
        contactList.push(person2);
        $scope.contactList = contactList;
        console.log('Hello World from Controller' + JSON.stringify(contactList));

    });

// function AppCtrl() {
//     console.log('Hello World from Controller');
// }