/* vim: set noai ts=4 sw=4 expandtab eol nobinary: */

"use strict";

const express = require("express");
const routes = require('./routes');

var app = express();

//Path to example application
app.use(express.static("./public/"));

//Path to openui5
//app.use(express.static("./node_modules/openui5-dist/dist/"));
 
//uso de mildware
app.use((req, res, next) => {  
      console.log("Ingresa");
      next();
  });

  // With middleware
app.use('/verify', function (req, res, next) {
    console.log("Redirect");
    console.log(req.query.code); 
    res.redirect('https://seidorsaas.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=1i40lh8dvq1slirunmse5rrm9h&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fportal');
    next();
});

/*app.use('/', function (req, res, next) {
    console.log(req.query.code); 
    console.log("Index") 
    next();
});
*/

//Rutas web
app.use('/', require('./routes'));
 
//Start web server
app.listen("8000", function() {
	console.log("Listening on port %d", "8000");
});

