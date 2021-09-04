"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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
  openingHours: {
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

// optional chaining (?.)

// this would give the opening time on thursday as thu is a property in openinghours
console.log(restaurant.openingHours.thu.open);

// this would give undefined as mon is not a property of openingHours object
console.log(restaurant.openingHours.mon);

// this would give error as we are trying to access the property of undefined
// console.log(restaurant.openingHours.mon.open);

// so normally we have to check if each property is a part of the object
// but this isn't a good solution when there might be many properties
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// using optional chaining
// this would return undefined as it checks if mon is a property of openingHours
// if only true it checks for the next property
console.log(restaurant.openingHours.mon?.open);

// example
const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? "closed";

  console.log(`On ${day} we're open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist!");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist!");

// Arrays
//const users = [{ name: "Benson", email: "bensyday@gmail.com" }];
const users = [];
console.log(users[0]?.name ?? "User list is empty");

// normal method
if (users.length > 0) console.log(users[0].name);
else console.log("User list is empty");
