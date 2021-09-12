const fs = require("fs");

// reading files
// two parameters ie string_path and an async function which is executed only after the text is read from file
// fs.readFile("./docs/blog.txt", (err, data) => {
//   if (err) console.log(err);
//   // using the toString() method converts the Buffer to string
//   console.log(data.toString());
// });

// writing files - method "writeFile(string_path,textToBeWritten, callback function)"
// fs.writeFile("./docs/blog.txt", "Hello, Benson Thomas", () => {
//   console.log("file was written");
// });

// // if the file doesn't exist it does not return error
// // it creates a new file of that name for us
// fs.writeFile("./docs/blog2.txt", "Hello, Benson Thomas", () => {
//   console.log("file was written");
// });

// directories > method - mkdir()
// create a directory in the current directory called assets also a async task
// running this command more than once would result in error as asset directory already exists
// so check if directory exists using fs.existsSync()
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("folder created");
//   });
// }
// // if it exists then remove the folder
// else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("directory removed");
//   });
// }

// deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Filed deleted");
  });
}
