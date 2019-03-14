var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})

var server = app.listen(8088, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Server running http://%s:%s", host, port);
})

