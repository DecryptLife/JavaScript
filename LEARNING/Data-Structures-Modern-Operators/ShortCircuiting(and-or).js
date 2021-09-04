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

// Short-Circuiting (&&,||)

console.log("-------- OR ---------");
// (&&,||) uses any data-type, returns any datatypes and also does short circuiting
// as shown below it will check if the first value is a falsy value and
// if it is not the first value gets returned right then
console.log(3 || "Benson");
console.log("" || "Benson");
console.log(true || 0);

// here both undefined and null are falsy values but the second value ie null will be returned
console.log(undefined || null);

// here we check if restaurant has numguests property
// if true, we return num of gues
// if false, return 10
// here numGuests can't be zero because 0 is a falsy value which is not accepted for this we use nullish coalescing operator
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// AND ("&&")
// && operator searches for the first false value and returns the false value
console.log("------ AND ------");

console.log(0 && "Benson");
console.log(7 && "Benson");

console.log("Benson" && 7 && null && "Thomas" && true);

// Practical example
console.log(restaurant.orderPizza("hand-baked", "cheese", "corn"));

// here it first checks if the first value is a falsy value
// if not then it prints the second value
// second value can be a function or anything
restaurant.orderPizza && restaurant.orderPizza("hand-baked", "cheese", "corn");
