var express = require("express");
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));
server.use(jsonParser);

server.get("/", function(request, response){
    console.log("server is started");
    response.send("<h1>Hello!</h1>");
});

server.get("/userGet", function(request,response){
    console.log(request.query);

    var obj = request.query;
    obj.userName = "Name";
    obj.userSurname = "Surname";
    obj.userAge = 0;
    obj.userAddress = "Nowhere"

    response.send(JSON.stringify(request.query));
});

server.post("/userPost", function(request,response){
    console.log(request.body);

    var obj = request.body;
    obj.userName = "Name";
    obj.userSurname = "Surname";
    obj.userAge = 0;
    obj.userAddress = "Nowhere"

    response.send(JSON.stringify(obj));
});

server.listen(3001);