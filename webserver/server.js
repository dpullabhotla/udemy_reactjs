var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

app.set('port', 8080);
//set static path 
app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//start server
app.listen(app.get("port"), function(){
 console.log("Server started on port:"+app.get("port"));
});

