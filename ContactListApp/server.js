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
// app.get('/', function(request,response){
//         response.send('Hello World from server.js');
// });

// listen the server on port 3000
app.listen(3000);
console.log("Server running on port 3000");