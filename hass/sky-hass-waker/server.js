#!/usr/bin/env node

const express = require("express");
const app = express();
const skyip = argv.skyip || "0.0.0.0";
const router = express.Router();
var SkyRemote = require('sky-remote');
var remoteControl = new SkyRemote(skyip, SkyRemote.SKY_Q_LEGACY);


const argv = require('minimist')(process.argv.slice(2));

const get_options = function (ip) {
    return {
        address: ip,
        timeout: argv.timeout || 5000
    }
};

router.route("/" + skyip + "/on")
    .get(function (req, res) {
        remoteControl.press('power');
console.log("toggled power on " + skyip);
            }
        );

	
router.route("/" + skyip + "/off")
    .get(function (req, res) {
        remoteControl.press('power');
console.log("toggled power on " + skyip);
            }
        );		


app.use("/sky", router);
const port = argv.port || 3000;
const ip = argv.host || "0.0.0.0";
app.listen(port, ip, function () {
    console.log("Listening on " + ip + ":" + port);
});