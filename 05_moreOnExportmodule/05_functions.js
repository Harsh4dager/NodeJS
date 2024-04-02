function myfunc1(){
    console.log("hello from myfunc1");
}

function myfunc2(){
    console.log("hello from myfunc2");
}

// now let's see how to export all thes functions and some variables as well
module.exports = {
    firstName : 'harsh',
    lastName : 'dager',
    firstFunction : myfunc1,
    secondFunction : myfunc2,
}
// you can use module.exports as many times as you want in your NodeJS code, but you should be aware that each new assignment will replace the previous one. You should use an object to group multiple exports together.
