// fs.rename(oldPath, newpath, callback);

const fs = require('fs');

fs.rename("./newExample.txt", "./myfolder/newExample.txt", err => {
    if(err){
        console.log(err);
        return;
    }
    else console.log('file renamed successfully');
})

