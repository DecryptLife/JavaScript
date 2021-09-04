// this will print the statement for 10 times
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights rep ${rep}`);
}

const bensonInfo = [
    'Benson',
    'Thomas',
    2021 - 1999,
    'student',
    ['Akhil','Bilu','Abin','Nikita','Jino']
]

const types = [];

for(let i = 0; i<bensonInfo.length ;i++){
    // reading from bensonInfo array
    console.log(bensonInfo[i], typeof bensonInfo[i]);

    // Filling types array
    types.push(typeof bensonInfo[i]);
}

console.log(types);

const years = [1997, 2002, 1983, 1999];
const ages = [];

for( let i = 0; i < years.length; i++)
{
    ages[i] = 2021 - years[i];
}

console.log(ages);

// break and continue

// ------ ONLY STRINGS ------
for(let i = 0; i<bensonInfo.length ;i++){
    if(typeof bensonInfo[i] !== 'string') continue;

    console.log(bensonInfo[i], typeof bensonInfo[i]);
}


console.log("------- BREAK WITH NUMBER -------");
for(let i  = 0; i<bensonInfo.length; i++)
{
    if(typeof bensonInfo[i] === 'number') break;

    console.log(bensonInfo[i], typeof bensonInfo[i]);
}

// looping backwards
for(let i = bensonInfo.length-1; i>=0; i--){
    console.log(i, bensonInfo[i]);
}


// nested loops
for(let exercise = 1; exercise <= 3; exercise++)
{
    console.log(`----- Starting exercise ${exercise} -----`);
    for(let rep = 1; rep <= 5; rep++){
        console.log(`Lifting weights rep ${rep}`);
    }
}