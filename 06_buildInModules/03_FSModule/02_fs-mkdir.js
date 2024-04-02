// The fs.mkdir() function in Node.js is used to create a new directory. It takes two arguments: the path of the directory to be created and an optional callback function that gets executed when the operation is complete.

const fs = require('fs');

// present working dir: C:\Users\harsh\OneDrive\Desktop\Practicing Node.js>
// making a new dir called ./myfolder

fs.mkdir('./myfolder', (err) => {
    if(err) console.log(err);
    else console.log('folder created successfully');
})
