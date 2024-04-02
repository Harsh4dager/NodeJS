// using the fs module to read the contents of the html, css and js file and the logo
// using the http module to render the files when someone tries to access the / route or the home page

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

// if we add console.log(url)
// Once we refresh the page, we see that initially the browser asks for the home page and makes a GET request with the / URL. Afterward it makes 3 more requests:
// /style.css – asking for the CSS file
// /browser-app.js – asking for the JS file
// /logo.svg – asking for the logo

// The browser makes request for the contents of the / path and the server just sends back the HTML content. Once the browser receives the HTML content, it interprets it and starts displaying the elements. While parsing HTML, if the browser encounters any additional resource like a CSS page or JS page, it will make a request to the server for the same.
// Since we are not sending the CSS, JS and Logo in the response, we do not see them on the screen. We can fix this by adding some more if()s in the code and sending those resources which the browser asks for and BOOM – this bug is fixed.

// see next file

