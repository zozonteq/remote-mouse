var robot = require("robotjs");
var express = require("express");
var qrcode = require("qrcode-terminal")
var os = require('os');
var ip = require("ip");
var pjson = require('./package.json');
var app = express();
var port = 2222;
var sens = 3;


var server = app.listen(port, function () {
    console.log("remote-mouse "+pjson.version);
    const link = "http://"+ip.address()+":"+port;
    qrcode.generate(link);
    console.log(link)
});
app.get("/api/mouse", function (req, res, next) {
    var qx = parseInt(req.query.x);
    var qy = parseInt(req.query.y);
    qx *= sens;
    qy *= sens;
    var nxX = robot.getMousePos().x + qx;
    var nxY = robot.getMousePos().y + qy;
    var screen = robot.getScreenSize();
    if (nxX > screen.width)
        nxX = screen.width;
    if (nxY > screen.height)
        nxY = screen.height;
    robot.moveMouse(nxX, nxY);
    console.log(`/api/mouse : (${nxX} , ${nxY}) `);
    res.send("ok");
});
app.get("/api/click",function(req,res,next){
    robot.mouseClick();
    console.log("/api/click")
    res.send("ok");
});
app.get("", function (req, res, next) {
    res.sendFile(__dirname + "/index.html");
});

