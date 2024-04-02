const http = require('http');
const fs = require('fs');

// get the contents of the html, css, js and logo files
const homePage = fs.readFileSync('./01_navbar-app/index.html');
const homeStyles = fs.readFileSync('./01_navbar-app/styles.css');
const homeLogo = fs.readFileSync('./01_navbar-app/logo.svg');
const homeLogic = fs.readFileSync('./01_navbar-app/browser-app.js');

// creating the server
const server = http.createServer((req, res) => {
    const url = req.url;
    console.log(url);
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(homePage);
        res.end();
    }
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    }
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeLogic);
        res.end();
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    }
    else if(url === './about'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<h1>About page</h1>");
        res.end();
    }
    else{
        res.writeHead(200, {'content-type': 'text/html'});
        res.write("<h1>404, Resource Not found</h1>");
        res.end();
    }
})

server.listen(5000, 'localhost', () => {
    console.log('server running at http://localhost:5000/');
})
