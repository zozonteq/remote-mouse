var robot = require("robotjs");
var express = require("express");
var qrcode = require("qrcode-terminal")
var os = require('os');
var ip = require("ip");
var pjson = require('./package.json');
var app = express();
var port = 2222;
var sens = 3;
robot.setMouseDelay(0);


var server = app.listen(port, function () {
    console.log("remote-mouse "+pjson.version);
    const link = "http://"+ip.address()+":"+port;
    qrcode.generate(link);
    console.log(link)
});
app.get("/api/mouse", function (req, res, next) {
    var qx = Number.parseInt(req.query.x, 10);
    var qy = Number.parseInt(req.query.y, 10);
    if (!Number.isFinite(qx) || !Number.isFinite(qy)) {
        return res.status(400).send("x and y must be integers");
    }
    qx *= sens;
    qy *= sens;
    var nxX = robot.getMousePos().x + qx;
    var nxY = robot.getMousePos().y + qy;
    var screen = robot.getScreenSize();
    // macOSのDockやホットコーナーが反応できるよう、画面端の有効座標まで移動する。
    nxX = Math.max(0, Math.min(nxX, screen.width - 1));
    nxY = Math.max(0, Math.min(nxY, screen.height - 1));
    robot.moveMouse(nxX, nxY);
    res.send("ok");
});
app.get("/api/click",function(req,res,next){
    robot.mouseClick();
    console.log("/api/click")
    res.send("ok");
});
app.get("/api/scroll", function (req, res, next) {
    var qx = Number.parseInt(req.query.x, 10);
    var qy = Number.parseInt(req.query.y, 10);
    if (!Number.isFinite(qx) || !Number.isFinite(qy)) {
        return res.status(400).send("x and y must be integers");
    }
    robot.scrollMouse(qx, qy);
    res.send("ok");
});
app.get("", function (req, res, next) {
    res.sendFile(__dirname + "/index.html");
});
