const http = require("http");

const port = 3000;
const hostName = "localhost";

// To avoid restarting the server after every change
// Install nodemon
// npm install -g nodemon

const server = http.createServer((req, res) => {
  console.log(req);
  // Try localhost:3000 and also localhost:3000/contact
  console.log(`Request url -> ${req.url}`);
  console.log(`Request method -> ${req.method}`);
});

// Enter localhost:3000 to see the log -> A request is made
server.listen(port, hostName, () => {
  console.log(`Listening on port ${port}`);
});
