// there is a property called ur in the req object which gives use the url of the request over the hostname and port like this:
// if url = http://localhost:5000/,  then req.url = /
// if url = http://localhost:5000/about,  then req.url = /about
// if url = http://localhost:5000/contact,  then req.url = /contact

// so using this we can use some conditionals along with the req.url propety to make our server respond to different request differently
const http = require('http');

const newServerHostname = 'localhost';
const newServerport = 7800

const newserver = http.createServer((req, res) =>{
  res.statusCode = 200;
  res.setHeader = {'Content-Type': 'text/plain'};

  if(req.url === '/') res.end('this is my home page');
  else if(req.url === '/about') res.end('this is my about page');
  else if(req.url === '/contact') res.end('this is my contact page');
  else res.end('404, Resurce not found');
})

newserver.listen(newServerport, newServerHostname,  () => {
  console.log(`server is starting at http://${newServerHostname}:${newServerport}/`)
})


