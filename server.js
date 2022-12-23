const http = require("http");
const fs = require("fs");

const port = 3000;
const hostName = "localhost";

// run "npm init" or "npm init --y" to intialize npm package manager and install local dependencies
// npm i moment


const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let route = "";
  switch (req.url) {
    case "/":
      route = "index.html";
      res.statusCode = 200;
      break;
    case "/contact":
      route = "contact.html";
      res.statusCode = 200;
      break;
    case "/contact-us":
      res.setHeader("Location", "/contact");
      res.statusCode = 301;
      res.end();
      break;
    default:
      route = "404.html";
      res.statusCode = 404;
      break;
  }
  fs.readFile(route, (error, data) => {
    if (error) console.log(error);
    else {
      res.write(data);
      res.end();
    }
  });
});

// Enter localhost:3000 to see the log -> A request is made
server.listen(port, hostName, () => {
  console.log(`Listening on port ${port}`);
});
