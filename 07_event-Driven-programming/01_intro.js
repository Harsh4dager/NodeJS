// a lot of NodeJS modules use the concept of events under the hood.

// to implement events:
// 1) emit(): which causes an event to occur
// 2) on(myEvent, myfunction): used to listen for a event and when this event occurs, the on() function executs a listener function in response to it.

// we can access the on() and emit() functions by creating an instance of the EventEmitter class( can be imported from build-in package called events).


// in  the below code, we are listening for the userJoined event and once this event takes place, we run the welcomeUser() function using the on() method and we emit the userJoined event using the emit() method:


// importing events module and creating an instance of the EventEmitter class
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// listen function = welcomeUser()
const welcomeUser = () => {
    console.log("hi there, welcome to the server!");
}

// listening for the userJoined event using the on() method
myEmitter.on('userJoined', welcomeUser);

// emitting the userJoined event using the emit() method
myEmitter.emit('userJoined');


// 1) what does it mean to emit the event?
// ans-> In the EventEmitter pattern, "emitting" an event means triggering it. When you call the emit() method on an EventEmitter instance, you're essentially saying that a particular event has occurred. Any functions (event listeners) that are listening for that event will then be invoked or called.

// 2) ther is no event defined called `userJoined`?
// ans-> In your code, you're correct that there's no explicit definition for the event named userJoined. However, in Node.js, you don't need to explicitly define events before emitting them. You can emit any event name, and it will work. So, userJoined is just a custom event name that you're using here.

// 3) userJoined doesn't exist; why do I get the output "Hi there, welcome to the server"?
// ans-> When you emit the userJoined event using myEmitter.emit('userJoined'), the EventEmitter checks if there are any listeners (functions) registered for that event. In this case, you have registered the welcomeUser.
