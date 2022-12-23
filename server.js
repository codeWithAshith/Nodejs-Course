const http = require("http");
const fs = require("fs");

const port = 3000;
const hostName = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  fs.readFile("./index.html", (error, data) => {
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
