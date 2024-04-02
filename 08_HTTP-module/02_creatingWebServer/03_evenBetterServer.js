// we got even better way of sending back a response in which we can add on 2 more methods along with res.end();

// 1) res.writeHead() - this is used to send the response headers to the client. 
// the statuscode as well as the headers like content-type can be set using this method.

// 2) res.write() - this method is used to send the response body to client

// 3) res.end() - this method is used to end the response process

const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1> Home Page</h1>');
        res.end();
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('this is the ABOUT page');
        res.end();
    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h1>this is CONTACT PAGE</h1>')
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'});
        res.write('<h1>404, Resource not found <a href = "/">Go Back Home</a></h1>'); // / in href reffers to the root node which is home page
        res.end();
    }
})

server.listen(4700, 'localhost', () =>{
    console.log(`server listening at port 4700: running at http://localhost:4700/`)
})
