'use strict';

// function declaration
function calcAge1(birthYear)
{
    return 2021 - birthYear;
}

const age1 = calcAge1(1999);
console.log("Age 1",age1);

// here "calcAge2" is the name of the function, another method to write a function"

// function expression
const calcAge2 = function (birthYear)
{
    return 2021 - birthYear;
}

const age2 = calcAge2(1994);
console.log("Age 2: ",age2);

//function calling other function


