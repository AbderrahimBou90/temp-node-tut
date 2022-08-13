// node built-in modules (http module setup)

const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req)
  // res.write('welcome genuis abderrahim to nodejs')
  // res.end()

  // ************* (http more feature) *****************
  //  IF YOU GET ERRORS WHILE USING IF STATMENT,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL

  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
  }
});

server.listen(5000);
