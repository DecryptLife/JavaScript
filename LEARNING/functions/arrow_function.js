'use strict';

// arrow function - single liner
const calcAge4 = birthYear => 2021 - birthYear;
const age = calcAge4(2005);

// arrow function - multiple lines
const yearsUntilRetirement = birthYear => {
    const age = 2021 - birthYear;
    const retirement = 65 - age;
    return retirement;
}

// arrow function - multiple parameters
const studentDetails = (student_name , birthYear) => {
    const age = 2021 - birthYear;
    return `${student_name} is ${age} years old`;
}

console.log(yearsUntilRetirement(2005));
console.log(studentDetails('Shreya',2005));