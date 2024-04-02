
// There can be multiple on()'s for a single emit():

const EventEmitter = require('events');
const myEvent = new EventEmitter();

// listener function 1
const sayHello = function(){
    console.log("hello user");
}

// listener function 2
const sayHI = function(){
    console.log("hi user");
}

// listener function 3
const greetBirthday = function(){
    console.log("happy birth day");
}

// subscribing to a event
myEmitter.on('newEvent', sayHello);
myEmitter.on('newEvent', sayHI);
myEmitter.on('newEvent', greetBirthday);

myEmitter.emit('newEvent');
