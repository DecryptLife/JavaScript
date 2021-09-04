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

// here numGuests can't be zero because 0  is a valid number of guests
// 0 is a falsy value which is not accepted for this so we use nullish coalescing operator
restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish coalescent operator (??)
// Here ?? checks only for null value ie (null and undefined) and not falsy value (0, ' ')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
