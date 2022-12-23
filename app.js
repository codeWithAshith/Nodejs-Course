const express = require("express");
const app = express();

// install express js
// npm i express
// npm i ejs

app.set("view engine", "ejs");
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/add-item", (req, res) => {
  res.render("add-item");
});

// always add to the last page
app.use((req, res) => {
  res.render("404");
});
