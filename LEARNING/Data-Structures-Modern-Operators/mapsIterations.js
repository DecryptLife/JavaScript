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

const question = new Map([
  ["question", "Which is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Congrats ✨"],
  [false, "Try again!"],
]);

console.log(question);

// convert object to map
// objects aren't iterable but converting them to maps helps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// iterations
// Quiz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const solution = Number(prompt("Your answer"));

console.log(question.get(question.get("correct") === solution));

// convert map to array
console.log(...question);

// map methods
console.log(question.entries);
console.log(question.keys);
console.log(question.values);
