const friends = ['Benson','Jino','Abin','Akhil','Bilu'];

// push and unshift are used for adding elements
// array method 'push' - a value gets added to the end of an array

const newLength = friends.push('Shinto');

console.log(friends);

// push is a function so it also returns the length of the modified array
console.log(newLength);

// array method 'unshift' - a value gets added to the beginning of the array
friends.unshift('Sibin');

console.log(friends);

// to remove elements
// pop removes last element
const popped  = friends.pop();
console.log(friends);

// pop method returns the popped element
console.log(popped);

// shift method removes the element from the beginning of the array
friends.shift();
console.log(friends);

// indexof method gives the indec of the element in array
//  if the element does not exist it returns -1
console.log(friends.indexOf("Benson"));
console.log(friends.indexOf("Thomas"));

// includes method checks if that element is present in the particular array 
// it returns boolean value 
console.log(friends.includes('Abin'));
console.log(friends.includes('Robin'));

if( friends.includes('Akhil'))
{
    console.log('You have a frien called Akhi');
}

