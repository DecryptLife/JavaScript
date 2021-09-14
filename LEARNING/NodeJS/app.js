const express = require("express");

// express app
const app = express();

// register view engine
// set() -> to configure app settings
// the below code tells that we will be using EJS for templates
app.set("view engine", "ejs");

// ejs by default searches for views in file named views but if you want to put it somewhere else
// you can specify the name of the folder where you have kept your views ex:myViews
// app.set("views", "myViews");

// listen for requests
app.listen(3000, () => {
  console.log("Request made");
});

// to listen to get requests
app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat browser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];
  // express automatically infers the type of data that needs to be sent so there is no ndeed to define header content
  // res.send("<p>home page</p>");

  // here it checks for the absolute path, so we have to mention the relative location
  // for this we have object as the second parameter which tells the root to look for and __dirname gives the current directory the project is in
  // res.sendFile("./views/index.ejs", { root: __dirname });

  // when we have to send the ejs file we have to use the render() method
  // we have to mention the filename and render will look for the file in the views folder by default unless otherwise mentioned
  // second parameter is the data objext which would be used by the ejs file ie index.ejs
  // blogs:blogs can be rewritten as just blogs
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  // res.send("<p>about page</p>");
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// create blog
app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

// redirects
// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

// 404 page
// we use use() to fire middlewares in express
// use function fires for every request coming but only if it reaches this part of the code
// ie when there is no response from the other functions
// must be at the very bottom
app.use((req, res) => {
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
