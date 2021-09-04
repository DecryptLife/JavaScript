let rep = 1;
while(rep <= 10){
    console.log(`Lifting weight rep ${rep}`);
    rep++;
}

// trunc function return the integer part after removing the decimal part
// Math.random gives a value between 0-1
let dice = Math.trunc(Math.random() * 6)+1;

while(dice !== 6)
{
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log("Loop is about to end...");
}