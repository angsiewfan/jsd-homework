// Homework: Conditionals
// The World Translator
// Write an if statement that writes Hello World in different languages. 
// Store a language in a variable.
// If the language is "English", log "Hello World"
// If the language is "French", log "Bonjour le monde"
// If the language is "Malay", log "Hai dunia" (I think?)
// Add as many others as you wish!
let language = "French";
if (language === "English") {
    console.log("Hello World");
} else if (language === "French") {
    console.log("Bonjour le monde");
} else if (language === "Malay") {
    console.log("Hai dunia");
}

// The Grade Assigner
// Store a testScore in a variable. Give the user a score (either "A", "B", "C", "D", or "F") 
//based on those test results.
let testScore = 100;
let A = 90;
let B = 80;
let C = 70;
let D = 60;
let E = 50;
if (testScore >= 90) {
    console.log("Grade A");
} else if (testScore >= B && testScore < A) {
    console.log("Grade B");
} else if (testScore >= C && testScore < B) {
    console.log("Grade C");
} else if (testScore >= D && testScore < C) {
    console.log("Grade D");
} else if (testScore >= E && testScore < D) {
    console.log("Grade E");
} else {
    console.log("Grade F");
}

// Air Conditioning
// Store the current temperature, whether the A/C is functional, and what the desired temperature is.
// If the airconditioner is functional and the current temperature is above the the desired temperature:
// Log "Turn on the A/C Please"
// If the airconditioner is non-functional and the current temperature is above the the desired temperature
// Log "Fix the A/C now! It's hot!"
// If the airconditioner is non-functional and the current temperature is below the the desired temperature
// Log "Fix the A/C whenever you have the chance... It's cool..."
let airconCondition = false
let desiredTemperature = false

if (airconCondition === true && desiredTemperature === true) {
    console.log("Turn on the A/C Please")
} else if (airconCondition === false && desiredTemperature === true) {
    console.log("Fix the A/C now! It's hot!")
} else if (airconCondition === false && desiredTemperature === false) {
    console.log("Fix the A/C whenever you have the chance... It's cool...");
}

// You and Your Government
// Write a program that stores a user age and logs a message based on that age.
// Age	Message
// >= 35	'You can vote AND hold any place in government!'
// >= 25	'You can vote AND run for the Senate!'
// >= 18	'You can vote!'
// ELSE	'You can't vote yet'
let userAge = 0
if (userAge >= 35) {
    console.log("You can vote AND hold any place in government!")
} else if (userAge >= 25 && userAge < 35) {
    console.log("You can vote AND run for the Senate!")
} else if (userAge >= 18 && userAge < 25) {
    console.log("You can vote!")
} else {
    console.log("You can't vote yet")
}

// Golf
// Write an if statement that gives a user the nickname of their score, 
// based on par and logs the score's nickname.
// Score	    Nickname
// 1	        "Hole in one"
// <= par - 2	"Eagle"
// par - 1	    "Birdie
// par	        "Par"
// par + 1	    "Bogey"
// par + 2	    "Double Bogey"
// >= par + 3	"Not sure"
let score = 7
let par = 3
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

// Serge Says
// Store a user's message.
// If the user asks a question (e.g. the message ends in ?)
// Log "Sure."
// If the user yells (e.g. the message is in all capitals)
// Log "Woah, chill out!"
// If the user doesn't say anything (e.g. the message is empty OR only spaces)
// Log "Fine. Be that way!"
// Otherwise:
// Log "Whatever."
let message = prompt("Say something")
if (message.trim() === "") {
    console.log("Fine. Be that way!")
} else if (message.substring(message.length - 1) === "?") {
    console.log("Sure")
} else if (message.toUpperCase() === message) {
    console.log("Woah, chill out!")
} else {
    console.log("Whatever.")
}

// The Pluralizer
// Write an if statement that works with a noun and a number. Make the noun plural if necessary!! 
//Make this as accurate as possible (using the rules described here)
function plural(words) {
    // regular, add s
    // ends with –s, –ss, –sh, –ch, –x, or –z, add es
    // ends with –f or –fe, the f or –fe, replace with ve
}

// pause - no electricity
// function isVowel(singleChar) {
//     const vowel = ["a", "e", "i", "o", "u"]
    
//     for (let i=0; i < )
// }

// The Rest
// Implement a Rock, Paper, Scissors single game
// Implement a Rock, Paper, Scissors best of three game
// Anything else you can think of!
let myChoice = prompt("rock, paper or scissors?").trim()
let randomNum = Math.round(Math.random() * Math.PI)
let opponentsChoice = randomNum == 0 ? "Rock" : randomNum == 1 ? "Paper" : "Scissors"

switch (myChoice.toLowerCase() + opponentsChoice.toLowerCase()) {
    case "rockrock", "paperpaper", "scissorsscissors":
        console.log("tie")
        break
    case "paperrock":
        console.log("me win")
        break
    case "rockpaper":
        console.log("you win")
    case "scissorsrock":
        console.log("computer wins")
        break
    case "rockscissors":
        console.log("me win")
        break
    case "scissorspaper":
        console.log("me win")
        break
    case "paperscissors":
        console.log("computer wins")
        break
    default:
        console.log("not valid")
        break
}

