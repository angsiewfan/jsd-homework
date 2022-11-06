// Homework: Variables and Primitive Data Types
// The Age Calculator
// Forgot how old someone is? Calculate it!
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", 
//substituting the values.
// Bonus: Get the current year with JavaScript
let currentYear = new Date().getFullYear();
let birthYear = prompt("Birth year", "Enter your birth year");

if (checkAge()) {
    let possibleAge = currentYear - birthYear;
    console.log(`They are either ${possibleAge} or ${possibleAge + 1}`);
}

function checkAge() {
    if (isNaN(birthYear)) {
        console.log("Invalid year");
        return false;
    } else {
        return true;
    }
}

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? 
//Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat in total for the rest of your life.
// Output the result to the screen like so: 
//"You will need NN to last you until the ripe old age of X".
// Bonus: Get the details with prompt
let currentAge = prompt("Please enter your age", 20);
let maxAge = prompt("Please enter your desired maximum age", 80);
let estimatedAmountPerDay = 3;
let totalSnackForLife;
let message;

function evaluateAgeInput() {
    let validAgeInput = false;
    
    if (isNaN(currentAge) && isNaN(maxAge)) {
        message = "Invalid age & maximum age";
     } else if (isNaN(currentAge)) {
        message = "Invalid age";
    } else if (isNaN(maxAge)) {
        message = "Invalid maximum age"
    } else {
        validAgeInput = true;
    }

    return validAgeInput;
}

if (evaluateAgeInput()) {
    totalSnackForLife = estimatedAmountPerDay * (maxAge - currentAge);
    console.log("You will need " + totalSnackForLife + " snacks to last you until the ripe old age of " + maxAge);
} else {
    alert(message);
    console.log(message);
}

// The Geometrizer
// Calculate the properties of a circle, using the definitions here.
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".
let radius = 10;
// multiply radius by 2 to get diameter. then multiply the result by π, or 3.14 for an estimation.
let diameter = radius * 2;
console.log(`The circumference is ${diameter * Math.PI}`);

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Store the temperature (in celsius) into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
let celcius = 38;
console.log(`${celcius}${'\xB0C'} is ${Math.round(celcius * 1.8 + 32)}${'\xB0F'}`);
console.log(`${celcius + String.fromCodePoint(8451)} is ${Math.round(celcius * 9/5) + 32}${'\xB0F'}`);

let fahrenheit = 100;
console.log(`${fahrenheit}${'\xB0F'} is ${Math.round((fahrenheit - 32) * (5/9))}${'\xB0C'}`);
