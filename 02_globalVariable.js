// global variables are variables that can  be acessed from anywhere in the code

console.log(__dirname); // stores the path to current working directory
console.log(__filename); // stores the path to current working file

// we can create our own global variables
globalThis.myvar = "hey there";

console.log(myvar);
