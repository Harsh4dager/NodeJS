// The fs module provides you with readdir() function using which you can read the contents of a directory (the files and folders present in the directory).

/*
The readdir() function accepts 2 parameters:

1) The path of the folder whose contents are to be read.
2) Callback function which gets executed once the operation is completed or if any error occurs during the operation. This function accepts 2 parameters: The first one which accepts the error object (if any error occurs) and the second parameter which accepts an array of the various files and folders present in the directory whose path has been provided.
*/

// let's read the content of myfolder directory
const fs = require('fs');

fs.readdir('./myfolder',(err, files)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory read successfully! here are the files: ');
    console.log(files);
})

