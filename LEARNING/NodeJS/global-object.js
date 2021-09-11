// Global Object
// console.log(global);

// we dont have to write global all the time as it is available all the time
// global.setTimeout(() => {
//   console.log("in the timeout");
// }, 3000);

setTimeout(() => {
  console.log("in the timeout");
  // since the setInterval() function keeps running we have to clear the interval
  // we use the method and we specify the function that needs to be cleared
  // here setInterval() keeps running every second and when there is a timeout
  // ie after 3 seconds the setInterval() is cleared and it stops running
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log("in the interval");
}, 1000);

// gives the absolute path of the folder this file is in
console.log(__dirname);
console.log(__filename);
