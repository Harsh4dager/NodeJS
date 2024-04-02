// server.js

// Import the http module
const http = require('http');

// Define the hostname and port(available doorway to connect)
const hostname = '127.0.0.1';
const port = 5000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body
  res.end('Hello World, how are you doin todays\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// there is aproblem though, if i search for any random page like 
// http://127.0.0.1:5000/ => WE'LL get the body
// http://127.0.0.1:5000/about => WE'LL get the same body
// http://127.0.0.1:5000/hsionst => WE'LL get the same body

// see the next file
