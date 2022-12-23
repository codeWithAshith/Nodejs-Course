const http = require("http");

const port = 3000;
const hostName = "localhost";

// To avoid restarting the server after every change
// Install nodemon
// npm install -g nodemon

const server = http.createServer((req, res) => {
  // To send plain text as response
  // Go to http://localhost:3000/ to see the response

  //   res.setHeader("Content-Type", "text/plain");
  //   res.write("Welcome to Code with Ashith");
  //   res.end();

  // To send plain html as response
  // Go to http://localhost:3000/ to see the response
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Welcome to Code with Ashith</h1>");
  res.write("<p>This is a Nodejs Application</p>");
  res.end();
});

// Enter localhost:3000 to see the log -> A request is made
server.listen(port, hostName, () => {
  console.log(`Listening on port ${port}`);
});
