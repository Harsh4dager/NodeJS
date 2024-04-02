// importing the path module
const path = require('path');

// assigning a path to the mypath variable
const mypath = 'C:/Users/harsh/OneDrive/Desktop/app.js';

const pathInfo = {
    filename: path.basename(mypath),
    foldername: path.dirname(mypath),
    fileExtension: path.extname(mypath),
    absoluteOrNot: path.isAbsolute(mypath),
    detailInfo: path.parse(mypath)
}
console.log(pathInfo);

console.log(path.sep); // we'll get / because we are in windows
console.log(path.join('gdf', 'pf', 'child.txt'));

// path.resolve: The path.resolve() function just joins the different paths provided to it using the system specific path separator and then appends the final output to the absolute path of the present working directory.
console.log(path.resolve('gdf', 'pf', 'child.txt'));

