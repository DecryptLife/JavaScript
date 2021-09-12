// here we require http module
const http = require("http");
const fs = require("fs");

// common practice
const _ = require("lodash");

// creating server
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  // lodash
  const num = _.random(0, 20);
  console.log(num);

  // to make this function execute only once we can use lodash
  const greet = _.once(() => {
    console.log("Hello");
  });

  greet();
  // does not execute
  greet();

  // set header type to html
  // writes to the browser
  res.setHeader("Content-Type", "text/html");

  let path = "./views/";

  // as the webpage gets bigger this code would start being messy when there would be a lot of cases
  // this can be done easily and more elegantly using express
  switch (req.url) {
    case "/":
      path += "index.html";
      // because the page exists and there is no error
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // about-me old version and you want this to permanently point to /about
    case "/about-blah":
      // the site has been moved to another resource
      res.statusCode = 301;
      // redirecting to /about when someone still uses the previous one
      res.setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // not an ideal way to send the data use file system instead
  // res.write('<head><link rel="stylesheet" href="#"></head>');
  // res.write("<p>Hello, Benson!</p>");
  // res.write("<p>Sorry! Hello, Benson Thomas</p>");

  // send an html file by reading from file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      // here it is important to end the res or it will be left hanging
      res.end();
    } else {
      // since we are using write only once we need not use write here we can send data in the end(data)
      // res.write(data);
      res.end(data);
    }
  });
  // ending the response and then sends back to the browser
  // res.end();
});

// listen is used to listen to the requests and it has three parameters
// first parameter is the port number and second is the host name (localhost is the default host name)
// third parameter is a callback function which fires when we start listening
server.listen(3000, "localhost", () => {
  console.log("Listening for requests on port 3000");
});
