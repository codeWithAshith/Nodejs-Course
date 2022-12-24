const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Item = require("./models/items");

const mongodb =
  "mongodb+srv://root:root@cluster0.bypwb3z.mongodb.net/?retryWrites=true&w=majority";

app.use(express.urlencoded({ extended: true }));
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

app.post("/item", (req, res) => {
  const item = Item(req.body);
  item
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
});

app.put("/item/:id", (req, res) => {
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body).then((result) => {
    res.json({ msg: "Updated Successfully" });
  });
});

app.delete("/item/:id", (req, res) => {
  const id = req.params.id;
  Item.findByIdAndDelete(id).then((result) => {
    res.json({ redirect: "/" });
  });
});

// always add to the last line
app.use((req, res) => {
  res.render("pages/404");
});
