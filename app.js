const express = require("express");
const app = express();

// install express js
// npm i express

app.listen(3000);

app.get("/", (req, res) => {
  res.send("<p>Home Page</p>");
});

app.get("/contact", (req, res) => {
  res.send("<p>Contact Page</p>");
});
