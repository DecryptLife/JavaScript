"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order: function (starterIndex, mainIndex) {
    // this will point to the current object ie restaurant here
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // destructuring object as function parameter
  orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
    console.log(`Order placed! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to 
    ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}.`);
  },

  orderPizza: function (crust, ...toppings) {
    console.log(`The pizza you ordered is ${crust} with toppings ${toppings}`);
    console.log(toppings);
  },
};

// MAPS
// Comparatively more useful than sets
// sets are mainly used when the concept of unique quantity comes in
// follows a key-value assigning

const rest = new Map();

// set works similar to add of sets but set also returns the map after modified
rest.set("name", "Benson's Delicacies");
rest.set(1, "Firenze, Italy");

console.log(rest.set(2, "Lisbon, Portugal"));

// since set() method returns the modified Map we can chain the set() method
rest
  .set("categories", ["Italian", "Pizzaria", "Vegeterian", "Organic"])
  .set("open", 4)
  .set("close", 22)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

// accessing elements of maps using get method

console.log(rest.get(true));
console.log(rest.get("open"));

const time = 19;
// Explanation
// checks if time falls within the range of opening and closing
// since it is a condition the output will be true or false
// accordingly the true/false value in map will be printed
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// few map methods
console.log(rest.has("categories"));
rest.delete(2);

// rest.clear();
const id = [1, 2];
// rest.set([1, 2], "Test");
rest.set(id, "Test");
console.log(rest);
console.log(rest.size);

console.log(rest.get([1, 2])); // this is not possible and the result will be undefined
console.log(rest.get(id));
