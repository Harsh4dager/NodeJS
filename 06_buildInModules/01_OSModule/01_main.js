// importing OS
const os = require('os');

// os.uptime(): Operating system uptime refers to the length of time a computer system has been continuously running since its last boot or restart
const systemUptime = os.uptime();
console.log(systemUptime)

// os.userInfo()
const userInfo = os.userInfo();
console.log(userInfo);
// The uid and gid is set to -1 in Windows, because Windows does not have the concept of user IDs like Unix-based systems

// we will store some other information about my windowsOS in this object
const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(), // returns total RAM in bytes
    freemem: os.freemem() // amount of free system memory in bytes
} 
console.log(otherInfo);

