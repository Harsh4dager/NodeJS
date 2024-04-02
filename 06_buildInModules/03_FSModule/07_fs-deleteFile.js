// fs.unlink(): used to delete a file

const fs = require('fs');

fs.unlink('./myfolder/newExample.txt', err=>{
    if(err){
        console.log(err);
        return;
    }
    else console.log('file deleted successfully');
})
