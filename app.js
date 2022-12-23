const express = require("express");
const app = express();

// install express js
// npm i express
// npm i ejs

app.set("view engine", "ejs");
app.listen(3000);

app.get("/", (req, res) => {
  const items = [
    {
      name: "Mobile Phone",
      price: 1000,
    },
    {
      name: "Tablet",
      price: 900,
    },
    {
      name: "Laptop",
      price: 10000,
    },
    {
      name: "Pen",
      price: 10,
    },
  ];
  res.render("pages/index", { items });
});

app.get("/add-item", (req, res) => {
  res.render("pages/add-item");
});

// always add to the last page
app.use((req, res) => {
  res.render("pages/404");
});
