var express = require("express");
var fs = require('fs');
var path = require("path");
var bodyParser = require("body-parser");

var app = express();

var PRODUCTS_FILE = path.join(__dirname, 'products.json');

app.set("port", (process.env.PORT || 8080));

app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Get products
app.get('/api/products', function(request, response){
	fs.readFile(PRODUCTS_FILE, function(err,data){
		response.setHeader('Cache-Control','no-cache');
		response.json(JSON.parse(data));
	});
});

//Add products
app.post('/api/products', function(request,response){
	fs.readFile(PRODUCTS_FILE, function(err,data){
		var products = JSON.parse(data);
		products.push(request.body);
		fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null,3), function(err){
			response.setHeader('Cache-Control','no-cache');
			response.json(products);
		});
	});
});

app.listen(app.get("port"), function(){
	console.log("Started server on port:"+app.get("port"));
});