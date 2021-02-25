const express = require("express");
const http = require('http');
const path = require('path');
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || "8000";

app.use(express.static(path.join(__dirname)));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/sender.html");
});

app.get("/receiver", (request, response) => {
    response.sendFile(__dirname + "/receiver.html");
});
server.listen(port);
console.log('Listening on: ' + port);
