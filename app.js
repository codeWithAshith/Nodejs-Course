const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Item = require("./models/items");

const mongodb =
  "mongodb+srv://root:root@cluster0.bypwb3z.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose
  .connect(mongodb, () => {
    console.log("Connected to MongoDB");
    app.listen(3000);
  })
  .catch((err) => console.log(err.reason));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  Item.find()
    .then((result) => {
      res.render("pages/index", { items: result });
    })
    .catch((err) => console.log(err));
});

app.get("/add-item", (req, res) => {
  res.render("pages/add-item");
});

app.get("/item/:id", (req, res) => {
  const id = req.params.id;
  Item.findById(id)
    .then((result) => {
      console.log(result);
      res.render("pages/item-detail", { item: result });
    })
    .catch((err) => console.log(err));
});

app.post("/items", (req, res) => {
  // To insert test item into the db
  //   const item = new Item({
  //     name: "Test Item",
  //     price: 300,
  //   });

  const item = Item(req.body);
  item
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

// always add to the last line
app.use((req, res) => {
  res.render("pages/404");
});
