// we can write inside a file synchronously and asynchronously as well

// synchronous Approach: we'll create and write the data in a file in a blocking manner, which means NodeJS waits for the creation and write operation to complete efore moving on to the next line of code.

const fs = require('fs');

// Data to write to the file
const data = 'Hello, World!';

try {
  // Write data to a file synchronously
  fs.writeFileSync('./myfolder/example.txt', data);

  console.log('Data has been written to the file synchronously.');
} catch (err) {
  // Handle errors
  console.error('Error writing to file:', err);
}


// Asynchronous Approach: In this approach, we create and write data to a file in a non-blocking manner, which means that NodeJS does not wait for the write operation to complete before moving on to the next line of code. Instead, it takes a callback function that gets called once the entire process is completed. If an error occurs during the write operation, the error object is passed to the callback function.

// writeFile(): is a method provided by fs module in NodeJS it is used to write data to a file asynchronously.
// it takes the path of the file, data, and the optional callback function
// When writeFile() is called, Node.js creates a new file or overwrites an existing file at the specified path

// const data = "hi, this is newfile.txt";

// fs.writeFile('./myfolder/myfile.txt', data, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log("sucessfully created and written to a file");
//     }
// })

// because this file exists all the data will be erased and new data will be written there
// fs.writeFile('./myfolder/myfile.txt', "new data in written now in this file", (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log("sucessfully created and written to a file");
//     }
// })

// if we want to append the new data then we need to use flag: 'a'
// fs.writeFile('./myfolder/myfile.txt', ", this newest data will be appended", {flag: 'a'}, (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log("sucessfully created and written to a file");
//     }
// })

