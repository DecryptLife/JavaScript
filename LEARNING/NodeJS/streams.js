const fs = require("fs");

// read stream > method createReadStream(path_string, encoding)
// here when we specify the encoding each time we obtain a chunk of data it gets encoded to readable form
const readStream = fs.createReadStream("./docs/blog3.txt", {
  encoding: "utf8",
});

// write stream
const writeStream = fs.createWriteStream("./docs/blog4.txt");

// .on is an event listener that listens to the data event
// every time we recieve a buffer/chunk of data from the stream this event gets executed
// every time we get tge chunk of data we fire the callback function
// readStream.on("data", (chunk) => {
//   console.log("----- NEW CHUNK -----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// pipe is much simpler to above code
readStream.pipe(writeStream);

// one more stream - duplex (refer)
