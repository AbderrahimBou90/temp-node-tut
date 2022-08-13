// node built-in modules (Fs module) (first video sync)
// there is two flavors :
// asynchronse  non-blocking
// synchronse   blocking
// we just cover both of the setups later we cover the difference between them

const { readFileSync, writeFileSync } = require("fs");

// we need to provide two parameters:
// path to that specific file - the encoding (utf8)
console.log('start')
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first, second);

// create new file the method is writeFileSync
// we need to provide two argements:
// file name - the value would want to pass
// if the file is not there node will create one and if the file is there node by default overwrite all the values are in the file

writeFileSync(
  "./content/result-sync.txt",
  `here is the result : ${first}, ${second}`,
  { flag: "a" }
);
console.log('done with this task')
console.log('starting the next one')
// if you want just append (without overwriting), you need to add third argument (flag:'a')
