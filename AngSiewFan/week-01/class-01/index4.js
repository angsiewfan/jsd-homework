// Homework: JavaScript loops
// The even/odd reporter
// Write a for loop that will iterate from 0 to 20. For each iteration, 
//it will check if the current number is even or odd, and report that to the screen 
//(e.g. "2 is even").
for (let i=0; i <= 20; i++) {
    if (i%2 === 0) {
        console.log(i + " is even")
    } else {
        console.log(i + " is odd")
    }    
}

// Multiplication Tables
// Write a for loop that will iterate from 1 to 12. For each iteration of the for loop, 
//it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 12.
for (let i=1; i <=12; i++) {
    let multiply = 9
    console.log(`${i} * ${multiply}`)
}
for (let i=1; i <=12; i++) 
{
    for(let j=1; j <=12; j++) 
    {
        console.log(`${i} * ${j} = ${i*j}`)
    } 
}


// The Grade Assigner
// Use the grade assigner code you wrote from the conditionals exercises for every value from 60 to 100 
// - so your log should show "For 89, you got a B. For 90, you got an A.", etc.
let testScore;
let A = 90;
let B = 89;
let C = 70;
let D = 60;
let E = 50;

for (testScore=60; testScore <=100; testScore++) {
    if (testScore >= 90) {
        console.log("For 90, you got an A.");
    } else if (testScore >= B && testScore < A) {
        console.log("For 89, you got a B.");
    } else if (testScore >= C && testScore < B) {
        console.log("For 70, you got a C.");
    } else if (testScore >= D && testScore < C) {
        console.log("For 60, you got a D.");
    } else if (testScore >= E && testScore < D) {
        console.log("For 50, you got an E");
    } else {
    console.log("Grade F");
    }
}

// Golf
// Using the Golf condition you made before in the conditionals exercise, 
//log out the nickname of every score from 1 to 8 on a par 5 hole
// Bonus: Use a nested for loop to run the same piece of code, but with par changing from 3 to 5
// Bonus: Generate a random par for each iteration
let score = 8
let par = 5
if (score === 1) {
    console.log("Hole in one")
} else if (score <= par - 2) {
    console.log("Eagle")
} else if (score === par - 1) {
    console.log("Birdie")
} else if (score === par) {
    console.log("Par")
} else if (score === par + 1) {
    console.log("Bogey")
} else if (score === par + 2) {
    console.log("Double Bogey")
} else if (score >= par + 3) {
    console.log("Not sure")
} 

// 99 Bottles of Beer
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. 
//If you're unfamiliar with the song, you can find the lyrics here.
// Make sure your program can handle both singular and plural cases 
//(i.e. both "100 bottles of beer" and "1 bottle of beer").

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// No more bottles of beer on the wall, no more bottles of beer.
// Go to the store and buy some more, 99 bottles of beer on the wall.
let originalBalance=99
for (let beerBalance=99; beerBalance >= 0; beerBalance--) {

    if (beerBalance === 0) {
        console.log(`No more bottles of beer in the wall, no more bottles of beer.\nGo to the store and buy some more, ${originalBalance} bottles of beer on the wall.`)
    } else {
        let result
        let numofBottle
        if (beerBalance === 1) {
            result = beerBalance + " bottle of beer in the wall, "+ beerBalance + " bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall."
        } else {
            numofBottle = beerBalance - 1
            result = beerBalance + " bottles of beer in the wall, "+ beerBalance + " bottles of beer.\nTake one down and pass it around, " + (numofBottle) + " bottles of beer on the wall."
        }

        console.log(result)

        //console.log(`${beerBalance} ${stringBottle} of beer in the wall, ${beerBalance} bottles of beer.\nTake one down and pass it around, ${numofBottle} ${stringBottle} of beer on the wall.`)
    }
}
