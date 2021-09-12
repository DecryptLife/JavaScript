// to get people values from people.js we use require
// const xyz = require("./people");

// this is an empty object when there is no export
// console.log(xyz);

// we cannot access elements of the file even though we have got access to the file
// or else we have to manually export from people.js file
// console.log(people);

// destructuring or when we want only the people data from the other file
// here we get only people values and not the ages
// names in modules.js and people.js should be same in destructuring line
const { people } = require("./people");

console.log(people);

// already built-in no need to create another file for this
const os = require("os");

// this is an object with information of the os it is running on
console.log(os);
// few methods
console.log(os.platform(), os.homedir());
