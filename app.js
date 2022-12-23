const express = require("express");
const app = express();

// install express js
// npm i express

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./views/contact.html", { root: __dirname });
});

// always add to the last page
app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
