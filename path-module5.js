// node built-in modules (path module)

const path = require("path");
// get separtor
console.log(path.sep);

// get file path
const filePath = path.join("/content/", "subfolder", "test.txt");
console.log(filePath);

// get last portion of file pathe
const base = path.basename(filePath);
console.log(base);

// get absolute path
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
