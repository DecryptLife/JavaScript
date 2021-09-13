const express = require("express");

// express app
const app = express();

// listen for requests
app.listen(3000, () => {
  console.log("Request made");
});

// to listen to get requests
app.get("/", (req, res) => {
  // express automatically infers the type of data that needs to be sent so there is no ndeed to define header content
  // res.send("<p>home page</p>");

  // here it checks for the absolute path, so we have to mention the relative location
  // for this we have object as the second parameter which tells the root to look for and __dirname gives the current directory the project is in
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send("<p>about page</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

// 404 page
// we use use() to fire middlewares in express
// use function fires for every request coming but only if it reaches this part of the code
// ie when there is no response from the other functions
// must be at the very bottom
app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
  //   res.statusCode = 404;
});
