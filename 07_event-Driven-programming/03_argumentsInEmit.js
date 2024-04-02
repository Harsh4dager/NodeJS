// emit can also contain arguments which will be passed to the listener function

const EventEmitter = require('events');
const myEvent = new EventEmitter();

// listener function
const greetBirthday = (name, newAge) => {
    console.log(`Happy Birthday ${name}, you are now ${newAge}!`);
}

// listening for the birthdayEvent
myEvent.on('birthdayEvent', greetBirthday);

// emitting the birthdayEvent with some parameters
myEvent.emit('birthdayEvent', 'harsh', 21);

// note: The emit() function should always be defined after the on() function(s):
