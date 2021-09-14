const mongoose = require("mongoose");

// Schema defines the structure of elements we're going to store inside the database
const Schema = mongoose.Schema;

// new instance of Schema object
// we'll also have an object as parameter which defines the structure of the documents
// second argument is an options object, here we are using timestamps which will give the timestamps for created at, updated at etc
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// model surrounds the schema and gives an interfaceby which we can communicate with the database collection
// the name inside model is important as it looks for that particular name inside the database and the value to be given should be the singular of the name given in database
// second argument will be the scheme related to the model
const Blog = mongoose.model("Blog", blogSchema);

// we have to export the Blog model if we want to use it somewhere else in the code
module.exports = Blog;
