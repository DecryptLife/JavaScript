const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//importing the blog file
const Blog = require("./models/blogs");
const { result } = require("lodash");

// express app
const app = express();

// connect to mongodb
const dbURL =
  "mongodb+srv://benson-thomas:test1234@nodetuts.ch39q.mongodb.net/nodetuts?retryWrites=true&w=majority";

// This is an asynchronous task so it returns a promise and we can use then to this
// second parameter is the options object
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
// set() -> to configure app settings
// the below code tells that we will be using EJS for templates
app.set("view engine", "ejs");

// ejs by default searches for views in file named views but if you want to put it somewhere else
// you can specify the name of the folder where you have kept your views ex:myViews
// app.set("views", "myViews");

// we'll put this inside where we connect it to DB because there is no point in listening to other requests if the db has not been connected
// listen for requests
// app.listen(3000);

// middleware & static files
app.use(express.static("public"));

// middle ware - fires for every single request
// this would hang the browser still running coz the browser does not know what to do next
// so we have to explicitly tell the browser to go ahead so inside use() take in another parameter called next and call it after all the details are obtained
// app.use((req, res, next) => {
//   console.log("new request made: ");
//   console.log("host: ", req.hostname);
//   console.log("path: ", req.path);
//   console.log("method: ", req.method);
//   next();
// });

// dev is the format in which the data is to be displayed
app.use(morgan("dev"));

// mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   // creating instance of Blog (document)
//   // this is done to create a new document
//   const blog = new Blog({
//     title: "new blog 2",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });

//   // async task and returns a promise
//   // saving data to DB
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // to retrieve all the blogs
// app.get("/all-blogs", (req, res) => {
//   // find() collects all the documents
//   // async task so we use then and catch because it returns a promise
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // to retrieve single block
// app.get("/single-blog", (req, res) => {
//   // In DB we have seen objectID but it is not stored as string
//   // but when we use mongoose the ID gets converted to string
//   Blog.findById("6140c11ef9dbf7d74e67e17a")
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
// app.use((req, res, next) => {
//   console.log("in the next middleware");
//   next();
// });

// to listen to get requests
app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  //   {
  //     title: "How to defeat browser",
  //     snippet: "Lorem ipsum dolor sit amet consectetur",
  //   },
  // ];
  // express automatically infers the type of data that needs to be sent so there is no ndeed to define header content
  // res.send("<p>home page</p>");

  // here it checks for the absolute path, so we have to mention the relative location
  // for this we have object as the second parameter which tells the root to look for and __dirname gives the current directory the project is in
  // res.sendFile("./views/index.ejs", { root: __dirname });

  // when we have to send the ejs file we have to use the render() method
  // we have to mention the filename and render will look for the file in the views folder by default unless otherwise mentioned
  // second parameter is the data objext which would be used by the ejs file ie index.ejs
  // blogs:blogs can be rewritten as just blogs
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

// this wont get loogged into console as a response is already rendered before this ie home page
// app.use((req, res, next) => {
//   console.log("in the next middleware");
//   next();
// });

app.get("/about", (req, res) => {
  // res.send("<p>about page</p>");
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

// blog routes
app.get("/blogs", (req, res) => {
  // sort() function is used to sort the result. It takes in an object which tells the details about the sort
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      // since blogs are used in EJS the key for the value result should be blogs
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
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
