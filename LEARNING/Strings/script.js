// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// // gives first index of character
// console.log(airline.indexOf("r"));

// // gives last index of character
// console.log(airline.indexOf("r"));

// // index of word
// console.log(airline.indexOf("Portugal"));

// // zero based slicing
// console.log(airline.slice(4));
// console.log(airline.slice(4, 8));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// // last two elements
// console.log(airline.slice(-2));

// const checkMiddleSeat = (seat) => {
//   // B and E are the middle seats
//   const val = seat.slice(-1);
//   if (val === "B" || val === "E") console.log("Middle Seat!");
//   else console.log("Not middle seat");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(airline.toUpperCase());
// console.log(airline.toLowerCase());

// // Fix capitalization in passenger name
// const passenger = "jOnAS";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passenger, passengerCorrect);

// // comparing emails
// const email = "hello@benson.io";
// const loginEmail = "   Hello@benson.IO  \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// // replacing
// const announcement =
//   "All passengers come to boarding door 23. Boarding door 23";

// console.log(announcement.replaceAll("door", "gate"));

// console.log(announcement.replace(/door/g, "gate")); // regex

// // booleans

// const plane1 = "Airbus A320neo";
// console.log(plane1.includes("A320"));
// console.log(plane1.includes("boeing"));
// console.log(plane1.startsWith("Air"));

// const checkBaggage = (items) => {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun"))
//     console.log("You're not allowed to board");
//   else console.log("Welcome aboard");
// };

// checkBaggage("I have a laptop, some food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and gun for protection");

// split - gives an array
// console.log("a+very+nice+string".split("+"));
// const [firstName, lastName] = "Benson Thomas".split(" ");
// console.log(`First Name: ${firstName}\nLast Name: ${lastName}`);

// const offName = [
//   "Mr.",
//   firstName,
//   lastName[0].toUpperCase() + lastName.slice(1),
// ].join(" ");
// console.log(offName);

// const capitalizeName = (name) => {
//   const names = name.split(" ");
//   const namesModified = [];

//   for (const n of names) {
//     // namesModified.push(n[0].toUpperCase() + n.slice(1));
//     namesModified.push(n.replace(n[0], n[0].toUpperCase()));
//   }

//   console.log(namesModified.join(" "));
// };

// capitalizeName("benson thomas");
// capitalizeName("akhil m varkey");
// capitalizeName("nikita elizabeth james");

// // padding - padStart(length,character) - it adds the character to string
// // so that the total length of the entire thing becomes equal to the new length
// const message = "Go to gate 23";
// console.log(message.padStart(25, "+").padEnd(35, "+"));
// console.log("Jonas".padStart(25, "+").padEnd(35, "+"));

// // example - masking credit card
// const maskCreditCard = (number) => {
//   const str = number + " "; // type casting

//   const lastFour = str.slice(-4);
//   return lastFour.padStart(str.length, "*");
// };

// console.log(maskCreditCard(4337377474737373737));
// console.log(maskCreditCard("23368368736483687638"));

// // repeat - repeat a string multiple times
// const message2 = "Bad weather... All Departures delayed...\t";
// console.log(message2.repeat(5));

// const planesInline = (n) => {
//   console.log(`There are ${n} planes in line, ${"🛫".repeat(n)}`);
// };

// planesInline(10);
// planesInline(4);
// planesInline(7);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

console.log(flights.split("+"));

for (const flight of flights.split("+")) {
  console.log(flight.split(";"));
}
