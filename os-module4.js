// node built-in modules (os module)

const os = require("os");

// info about current user (me)
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
