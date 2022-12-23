const http = require("http");

const port = 3000;
const hostName = "localhost";

const server = http.createServer((req, res) => {
  console.log("A request is made");
});

// Enter localhost:3000 to see the log -> A request is made
server.listen(port, hostName, () => {
  console.log(`Listening on port ${port}`);
});
