// slide class-02-structural
// Exercises: Functions
// Driving Age
// Write a function that receives a userAge called canDrive
// If the received age is less than 16, print "Sorry, you can't drive yet"
// If the received age is equal to or over 16, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how many years they will have to wait (e.g. "Sorry, you have 4 years to wait until you can drive")
// function canDrive(userAge) {
//     const minDrivingAge = 16
 
//     let result
//     if (userAge < minDrivingAge) {
//         let yearsLeft = minDrivingAge - userAge
//         result = "Sorry, you have " + pluralizeWord("year","years",yearsLeft) + " to wait until you can drive"
        
//     } else {
//         result = "Drive away!"
//     }

//     return result
// }
// function pluralizeWord(singularWord, pluralWord, count) {
//     return count > 1 ? count+" "+ pluralWord : count+" "+singularWord;
// }
// let strCanDrive = canDrive(1)
// console.log(strCanDrive)

// The World Translator
// Write a function called translator that receives a language (e.g. "fr", "eng" etc.). Log out the translated version (e.g. if the language is "eng" - log "Hello World", if the language is "fr" - log "Bonjour le monde" etc.)
// let lang = prompt("","Language (Eng/Fr/Kr/My)");
// Language selection
// const language = (lang) => {
//     let result = (lang.toUpperCase() === "ENG")? "Hello World":(lang.toUpperCase() === "MY")?"Hai Dunia":
//     (lang.toUpperCase() === "FR")?"Bonjour le monde":(lang.toUpperCase() === "KR")?"안녕하세요 세계":"Language not available!";

//     console.log(result);
// }
// language(lang);

// const lang = [
//     { language: "English", word: "Hello World" },
//     { language: "Malay"  , word: "Hai dunia" },
//     { language: "French" , word: "Bonjour le monde" }
// ];

// let ivalue = prompt("Enter Language [english,malay,french]", "English");

// lang.forEach(e => {
//     if (e.language.toUpperCase()== ivalue.toUpperCase()){
//         console.log(e.word);       
//         return;
//     }    
// });

// The Age Calculator
// Forgot how old you are? Calculate it!
// Write a function named calculateAge that:
// Takes 2 arguments: birthYear, and currentYear.
// Calculates the 2 possible ages based on those years.
// Outputs the result: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
// let currentYear = new Date().getFullYear();
// function checkAge(birthYear) {
//     let possibleAge = currentYear - birthYear;
//     console.log(`You are either ${possibleAge} or ${possibleAge + 1}`);
// }
// checkAge(2000)
// checkAge(2001)
// checkAge(2002)

// The Lifetime Supply Calculator
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// Takes 2 arguments: age, and amountPerDay.
// Calculates the amount consumed for rest of the life (based on a constant max age).
// Outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amountPerDay, and round the result to a round number.
// let currentAge = prompt("Please enter your age", 20);
// let maxAge = prompt("Please enter your desired maximum age", 80);
// let estimatedAmountPerDay = 3;
// let totalSnackForLife;
// let message;

// function calculateSupply(currentAge, maxAge) {
//     totalSnackForLife = estimatedAmountPerDay * (maxAge - currentAge);
//     console.log("You will need " + totalSnackForLife + " snacks to last you until the ripe old age of " + maxAge);
// } 
// calculateSupply(currentAge,maxAge)

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// function calcCircumference (radius) {
//     let circumference = radius * 2 * Math.PI
//     console.log(circumference)
// }
// calcCircumference(2)
// // Create a function called calcArea:
// // Pass the radius to the function.
// // Calculate the area based on the radius, and output "The area is NN".
// function calcArea(radius) {
//     let area = Math.pow(radius, 2) * Math.PI
//     console.log("area: " + area)
// }
// calcArea(2)

// // The Temperature Converter
// // It's hot out! Let's make a converter based on the steps here.
// // Create a function called celsiusToFahrenheit:
// // Store a celsius temperature into a variable.
// // Convert it to fahrenheit and output "NN°C is NN°F".
// // Create a function called fahrenheitToCelsius:
// // Now store a fahrenheit temperature into a variable.
// // Convert it to celsius and output "NN°F is NN°C".
// function celsiusToFahrenheit(celsius) {
//     console.log(`${celsius}${'\xB0C'} is ${Math.round(celsius * 1.8 + 32)}${'\xB0F'}`)
// }
// let celsius = 38
// celsiusToFahrenheit(celsius)

// function fahrenheitToCelsius(fahrenheit) {
//     console.log(`${Math.round((fahrenheit - 32) * (5/9))}${'\xB0F'} is ${fahrenheit}${'\xB0C'}`)
// }
// let fahrenheit = 100
// fahrenheitToCelsius(fahrenheit)

// Working with Users
const users = [
    {
      email: "groucho@ga.co",
      password: "chicken",
      isAdmin: true
    },
    {
      email: "harpo@ga.co",
      password: "elephant",
      isAdmin: false
    },
    {
      email: "gummo@ga.co",
      password: "pinkFairyArmadillo",
      isAdmin: true
    },
    {
      email: "zeppo@ga.co",
      password: "dumboOctopus",
      isAdmin: false
    }
  ];
function findUser(email,password) {
    for (i=0; i < users.length; i++)
    {
        if (users[i].email === email && users[i].password === password) {
            console.log("You are logged in")
            break
        } else {
            console.log("Sorry, something went wrong")       
        }
    }
}
findUser("groucho@ga.co","chicken")

function createAccount(newEmail, newPassword, isAdministrator) {
    users.push({ email: newEmail,
    password: newPassword,
    isAdmin: isAdministrator
    })

    console.log(users)
}
// createAccount("angsiewfan@gmail.com", "abcd1234", false)

function deleteAccount(password) {
    for (i=0; i < users.length; i++)
    {
        if (users[i].password === password) {
            users.pop()
        }
    }

    console.log(users)
}
deleteAccount("dumboOctopusa")

// Make a function that updates an account. e.g. updateAccount("harpo@ga.co", "password", "ayeAye");
function updateAcc(inEmail, item, newData) {
  for (i=0; i < users.length; i++)
    {
        console.log(inEmail)
        console.log(newData)
        if (users[i].email === inEmail) {
            users[i].password = newData
        }
    }
}
updateAcc("harpo@ga.co", "password", "ayeAye")
console.log(users)

// Bonus: Instead of receiving two strings to illustrate the change (like above), receive an object so you could potentially change multiple things at once. 
//e.g. updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
// Bonus: Make this work only if the current password was also provided as a parameter. e.g. updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });

// Add a few extra users and make a search function. I'll let you decide on the interface or the function signature
