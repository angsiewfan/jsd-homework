// Exercises: Primitive Data Types
// How would you?
// Convert a string into a number (e.g. "4" into 4)?
let myNumber = "4";
console.log(parseInt(myNumber) + " is a " + typeof(parseInt(myNumber)))

// Convert a number into a string (e.g. 15 into "15")?
let strNumber = 15;
console.log(strNumber.toString() + " is a " + typeof(strNumber.toString()));

// Make a string uppercased (e.g. "hello" into "HELLO")?
let myString = "hello";
console.log(myString.toUpperCase());

// Get the second character out of a string (e.g."hello" returns "e")?
let getCharacter = "hello";
console.log(getCharacter[1]);

// Use concatenation to combine two strings (e.g. join "Hello " and "World")?
let firstString = "Hello";
let secondString = "World";
console.log(firstString.concat(secondString));

// Get a number and square it (e.g. 4 squared is 16)?
let number1 = 4;
console.log(Math.pow(number1,2));

// Get the square root of a number (e.g. square root of 25 is 5)?
let number2 = 25;
console.log(Math.sqrt(number2))

// 31 Oct 2022
// Exercises: Conditionals
// 1. What number's bigger?
// Write an if statement that compares two numbers (call them numOne and numTwo).
// If numOne is bigger, it should log to the console "numOne (THE VALUE) is bigger than numTwo (THE VALUE)".
// If numTwo is bigger, it should log to the console "numOne (THE VALUE) is smaller than numTwo (THE VALUE)".
// If they are even, it should log to the console "numOne (THE VALUE) is equal to numTwo (THE VALUE)".
let numOne = 1;
let numTwo = 2;
if (numOne > numTwo) {
    console.log("numOne (" + numOne + ") is bigger than numTwo (" + numTwo + ")");
} else if (numTwo > numOne) {
    console.log("numTwo (" + numTwo + ") is bigger than numOne (" + numOne + ")");
} else {
    console.log("numOne (" + numOne + ") is equal to numTwo (" + numTwo + ")");
}

// 2. Driving Age
// Store the user's name and age.
// If the age is less than 16, log "Sorry, you can't drive yet!"
// If the age is greater than or equal to 16, log "Drive into the sunset!"
// Bonus: Get the name and age using prompt!
// Bonus: If the user can't drive yet, tell them how many years they have before they can drive (e.g. "Sorry, you still have 4 years before you can drive")
let userName = prompt("Name:", "Enter your name here").trim();
let inputAge = prompt("Age:", 0);
let userAge = parseInt(inputAge);
const drivingAge = 16;
let yearToDrive;

function checkName(userName){
    if (userName === "") {
        alert("Name cannot be empty");
        return false;
    }
    else {
        return true;
    }
}

function checkAge(inputAge) {
    if (isNaN(inputAge) && userAge < 0) {
        alert("Age must be a number which is bigger or equal than 0");
        return false;
    }
    else {
        return true;
    }
}

console.log("Name: " + userName + "\nAge: " + userAge);

if (!checkName()) {
    console.log("Name cannot be empty!");
} else if (!checkAge()) {
    console.log("Age must be a number which is bigger or equal than 0");
} else {
    if (userAge < drivingAge) {
        // console.log("Sorry, you can't drive yet!");
        yearToDrive = drivingAge - userAge;
        if (yearToDrive === 1) {
            console.log("Sorry, you still have " + (drivingAge - userAge) + " year before you can drive.");
        }
        else {
            console.log("Sorry, you still have " + (drivingAge - userAge) + " years before you can drive.");
        }
    } else {
        console.log("Drive into the sunset!");
    }
}

// Exercises: Loops
//Log every number from 0 to 10
for (let num=0; num <= 10; num++)
{
    console.log(num);
}

//Log every number from 4 to -16
for (let num=4; num >= -16; num--)
{
    console.log(num);
}

//Log every fourth number from 8 to 41
for (let num=8; num <= 41; num += 4)
{
    console.log(num);
}

//The Classic Fizzbuzz Program
// Loop from 0 to 100.
// If the number is evenly divisible by 3, log "Fizz"
// If the number is evenly divisible by 5, log "buzz"
// If the number is evenly divisible by both 3 and 5, log "Fizzbuzz"
for (let num=0; num <= 100; num++)
{
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + " - Fizzbuzz");
    } else if (num % 3 === 0) {
        console.log(num + " - Fizz");
    } else if (num % 5 === 0) {
        console.log(num + " - buzz");
    }
}
