/**
 * Server.js
 */


var express = require('express');
var app = express();

/**
 * use static files
 */

app.use(express.static(__dirname + "/public"));



/**
 * get response and display into console
 */
app.get('/contactList', function(request,response){
       // response.send('Hello World from server.js');
       console.log('Data is received from GET');
        var person1 = {
            name : 'sujit',
            email : 'sujitlkumbhar.gmail.com',
            contactNumber : '8308038255'
        }

        var person2 = {
            name : 'Ajit',
            email : 'ajitkumbhar.gmail.com',
            contactNumber : '9763442080'
        }

        var contactList = [];
        contactList.push(person1);
        contactList.push(person2);


        response.json(contactList);
});

// listen the server on port 3000
app.listen(3000);
console.log("Server running on port 3000");