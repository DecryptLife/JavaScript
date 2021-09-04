// studentInfo is an object with properties firstName, lastName, age and friends
// properties can hold any kind of data
// order does not matter when we retrieve them


const studentInfo = {
    firstName: 'Benson',
    lastName: 'Thomas',
    age: 2021 - 1999,
    friends: ['Akhil','Jino','Abin','Bilu']
}

console.log(studentInfo);

// dot notation
console.log(studentInfo.firstName);

// bracket notation
console.log(studentInfo['lastName']);

// here string 'first' gets concatenated with the nameKey value and then we look for the property in object studentInfo
// this does not work with dot notation
const nameKey = 'Name';
console.log(studentInfo['first'+nameKey],studentInfo['last'+nameKey]);

// prompt is a built-in function in JavaScript which gives a popup window
const interestedIn = prompt("What do you wish to know about the student? Choose between firstName, lastName, age and friends");

// this block allows in checking if the above entered choice is an property of the object and gets executed only if it is present
if(studentInfo[interestedIn])
{
    console.log(studentInfo[interestedIn]);
}

// updating the object
studentInfo.job = 'Student';
studentInfo['profession'] = 'Engineer';
console.log(studentInfo);

console.log(`${studentInfo.firstName} has ${studentInfo.friends.length} friends and his best friend is ${studentInfo.friends[0]}`);