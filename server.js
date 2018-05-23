// Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Set up Express App

var app = express();
var PORT = precess.env.PORT || 9000;

// Set up 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser,json());

// Table reservation list
var tables = [
    {
        customerName : "brian",
        phoneNumber: "5121111111",
        customerEmail: "brain@gmail.com",
        customerID: "brain1234"

    },
    {
        customerName : "wonbok",
        phoneNumber: "5122222222",
        customerEmail: "wonbok@gmail.com",
        customerID: "wonbok1234"

    },
    {
        customerName : "adam",
        phoneNumber: "5123333333",
        customerEmail: "adam@gmail.com",
        customerID: "adam1234"

    },
    {
        customerName : "kwanhee",
        phoneNumber: "5127777777",
        customerEmail: "kwanhee@gmail.com",
        customerID: "kwanhee1234"

    }

]

//Routes

app.get("/",function(req, res){
    res.sendFile(patn.join(__dirname, "home.html"));
});

app.get("/table",function(req, res){
    res.sendFile(patn.join(__dirname, "table.html"));
});

app.get("/reservations",function(req, res){
    res.sendFile(patn.join(__dirname, "reservations.html"));
});

//Display all tables

app.get("/api/tables", function(req, res){
    return res.json(tables);
});

//Display single table
app.get("/api/tables/:table", function(req, res){
    var chosen = req.params.table;

    console.log(chosen);

    for (var i = 0; i <tables.length; i++){
        if(chosen === tables[i].customerName){
            return res.json(tables[i]);
        }
    }

    return res.json(false);
});

//Create New Tables

app.post("/api/tables", function(req, res){
    var newtable = req.body;

    console.log(newtable);

    tables.push(newtable);

    res.json(newtable);


});

//Start the server to begin listening


app.listen(PORT, function(){
    console.log("App listeing on PORT " + PORT);
});