const Pusher = require("pusher");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
    appId: "1400635",
    key: "61a2b9cf3efcc637be74",
    secret: "db727fc561d83332c6b9",
    cluster: "ap2",
    useTLS: false,
});

app.set("PORT", 5000);

app.post("/message", (req, res) => {
    const payload = req.body;
    pusher.trigger("onchains-assignment-arun", "message", payload);
    res.send(payload);
});

app.listen(app.get("PORT"), () =>
    console.log("Listening at " + app.get("PORT"))
);
