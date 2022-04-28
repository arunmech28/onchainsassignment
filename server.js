const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const Pusher = require("pusher");
const cors = require("cors");

// const pusher = new Pusher({
//     appId: "1400635",
//     key: "61a2b9cf3efcc637be74",
//     secret: "db727fc561d83332c6b9",
//     cluster: "ap2",
//     useTLS: true,
// });

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/message/send", (req, res) => {
    pusher.trigger("onchains-assignment-arun", "messages", {
        message: req.body.message,
        username: req.body.username,
    });
    res.sendStatus(200);
});

app.post("/pusher/auth", (req, res) => {
    console.log("POST to /pusher/auth");
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const auth = pusher.authenticate(socketId, channel);
    res.send(auth);
});

app.set("port", 5001);

app.listen(app.get("port"), function () {
    console.log("Node app is running on port", app.get("port"));
});
