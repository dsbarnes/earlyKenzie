const express = require("express");
const app = express();
const path = require("path");
const pathToStaticFiles = path.join(__dirname, "public");

const hostname = "127.0.0.1";
const port = 3000;

app.use(express.json());
app.use(express.static(pathToStaticFiles));

const users = [];

app.get("/api/users", function(req, res) {
  res.send(users);
});
app.post("/api/users/", function(req, res) {
  let found = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i] == req.body.userUsername) {
      found = true;
    }
  }

  if (found == false) {
    res.status(201);
    users.push(req.body);
    res.send(users);
  } else {
    res.status(409);
    res.send("username is already taken");
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
