#!/usr/bin/env node

const express = require("express");
const app = express();

const router = express.Router();

var remoteControl = new SkyRemote('192.168.1.180', SkyRemote.SKY_Q_LEGACY);

const OK = {status: "success"};
const HTTP_400 = 400;
const HTTP_404 = 404;

const argv = require('minimist')(process.argv.slice(2));


const get_options = function (ip) {
    return {
        address: ip,
        timeout: argv.timeout || 5000
    }
};

router.route("/192.168.1.180/on")
    .get(function (req, res) {
        remoteControl.press('power');
        }).catch(
            function (err) {
                res.status(HTTP_400);
                res.json({status: err.message})
            }
        );
    });

router.route("/192.168.1.180/off")
    .get(function (req, res) {
        remoteControl.press('power');
        }).catch(
            function (err) {
                res.status(HTTP_400);
                res.json({status: err.message})
            }
        );
    });

app.use("/sky", router);
const port = argv.port || 3000;
const ip = argv.host || "0.0.0.0";
app.listen(port, ip, function () {
    console.log("Listening on " + ip + ":" + port);
});
