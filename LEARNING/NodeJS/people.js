const people = ["Benson", "Abin", "Akhil", "Jino", "Bilu"];
const age = [22, 23, 20, 20, 21];
console.log(people);

// to export a single value
// module.exports = people;

// to export mutliple values create object and use key-value pairs

module.exports = {
  // since both key and value are of the same name this can be re-written as
  // people: people,
  // age: age
  people,
  age,
};
