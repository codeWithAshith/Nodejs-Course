const express = require("express");
const app = express();
const mongoose = require("mongoose");

// create database in mongoda atlas
// mongoose is a orm
// install mongoose
// npm install mongoose --save

const mongodb =
  "mongodb+srv://root:root@cluster0.bypwb3z.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose
  .connect(mongodb, () => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.log(err.reason));

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
