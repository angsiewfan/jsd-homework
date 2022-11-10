// slide class-02-structural
// Exercises: Functions
// Driving Age
// Write a function that receives a userAge called canDrive
// If the received age is less than 16, print "Sorry, you can't drive yet"
// If the received age is equal to or over 16, print "Drive away!"
// Bonus: If the user can't drive yet, tell them how many years they will have to wait (e.g. "Sorry, you have 4 years to wait until you can drive")
function canDrive(userAge) {
    const minDrivingAge = 16
 
    let result
    if (userAge < minDrivingAge) {
        let yearsLeft = minDrivingAge - userAge
        result = "Sorry, you have " + pluralizeWord("year","years",yearsLeft) + " to wait until you can drive"
        
    } else {
        result = "Drive away!"
    }

    return result
}
function pluralizeWord(singularWord, pluralWord, count) {
    return count > 1 ? count+" "+ pluralWord : count+" "+singularWord;
}
let strCanDrive = canDrive(1)
// console.log(strCanDrive)

// The World Translator
// Write a function called translator that receives a language (e.g. "fr", "eng" etc.). Log out the translated version (e.g. if the language is "eng" - log "Hello World", if the language is "fr" - log "Bonjour le monde" etc.)
const lang = [
    { language: "English", word: "Hello World" },
    { language: "Malay"  , word: "Hai dunia" },
    { language: "French" , word: "Bonjour le monde" }
];

let ivalue = prompt("Enter Language [english,malay,french]", "English");

lang.forEach(e => {
    if (e.language.toUpperCase()== ivalue.toUpperCase()){
        console.log(e.word);       
        return;
    }    
});

// The Age Calculator
// Forgot how old you are? Calculate it!
// Write a function named calculateAge that:
// Takes 2 arguments: birthYear, and currentYear.
// Calculates the 2 possible ages based on those years.
// Outputs the result: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
let currentYear = new Date().getFullYear();
function checkAge(birthYear) {
    let possibleAge = currentYear - birthYear;
    console.log(`You are either ${possibleAge} or ${possibleAge + 1}`);
}
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
let currentAge = prompt("Please enter your age", 20);
let maxAge = prompt("Please enter your desired maximum age", 80);
let estimatedAmountPerDay = 3;
let totalSnackForLife;
let message;

function calculateSupply(currentAge, maxAge) {
    totalSnackForLife = estimatedAmountPerDay * (maxAge - currentAge);
    console.log("You will need " + totalSnackForLife + " snacks to last you until the ripe old age of " + maxAge);
} 
// calculateSupply(currentAge,maxAge)

// The Geometrizer
// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumference:
// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
function calcCircumference (radius) {
    let circumference = radius * 2 * Math.PI
    console.log(circumference)
}
// calcCircumference(2)
// Create a function called calcArea:
// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".
function calcArea(radius) {
    let area = Math.pow(radius, 2) * Math.PI
    console.log("area: " + area)
}
// calcArea(2)

// The Temperature Converter
// It's hot out! Let's make a converter based on the steps here.
// Create a function called celsiusToFahrenheit:
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C".
function celsiusToFahrenheit(celsius) {
    console.log(`${celsius}${'\xB0C'} is ${Math.round(celsius * 1.8 + 32)}${'\xB0F'}`)
}
let celsius = 38
celsiusToFahrenheit(celsius)

function fahrenheitToCelsius(fahrenheit) {
    console.log(`${Math.round((fahrenheit - 32) * (5/9))}${'\xB0F'} is ${fahrenheit}${'\xB0C'}`)
}
let fahrenheit = 100
fahrenheitToCelsius(fahrenheit)

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

    // console.log(users)
}
// createAccount("angsiewfan@gmail.com", "abcd1234", false)

function deleteAccount(password) {
    for (i=0; i < users.length; i++)
    {
        if (users[i].password === password) {
            users.pop()
        }
    }

    // console.log(users)
}
deleteAccount("dumboOctopusa")

// Make a function that updates an account. e.g. updateAccount("harpo@ga.co", "password", "ayeAye");
function updateAcc(inEmail, newData) {
  for (i=0; i < users.length; i++)
    {
      if (users[i].email === inEmail) {
        users[i].password = newData
        break
      }
    }
}
updateAcc("harpo@ga.co", "ayeAye")
// console.log(users)

// Bonus: Instead of receiving two strings to illustrate the change (like above), 
//receive an object so you could potentially change multiple things at once. 
//e.g. updateAccount("harpo@ga.co", { password: "gharial", isAdmin: false });
function updateAccountMultiple(inEmail, objectChange) {
  for (i=0; i < users.length; i++)
  {
    if (users[i].email === inEmail) {
      users[i].password = objectChange.password
      users[i].isAdmin = objectChange.isAdmin
      break
    }
  }
}
updateAccountMultiple("harpo@ga.co", { password: "gharial", isAdmin: true })
// console.log(users)

// Bonus: Make this work only if the current password was also provided as a parameter. 
// e.g. updateAccount("harpo@ga.co", "elephant", { password: "gharial", isAdmin: true });
function updateAccountMultiple(inEmail, objectChange) {
  for (i=0; i < users.length; i++)
  {
    if (users[i].email === inEmail) {
      users[i].password = objectChange.password
      users[i].isAdmin = objectChange.isAdmin
      break
    }
  }
}
updateAccountMultiple("harpo@ga.co", { password: "gharial", isAdmin: true })
// console.log(users)

// Add a few extra users and make a search function. 
//I'll let you decide on the interface or the function signature
createAccount("angsiewfan@gmail.com", "avengers", false)
createAccount("athenagoddessofwar@gmail.com", "zeus", true)
createAccount("loki@gmail.com", "thor", false)
// console.log(users)

function searchUser(searchEmail) {
  for (i=0; i < users.length; i++)
  {
    if (users[i].email === searchEmail) {
      console.log("User exists")
      break
    }
  }
}
// searchUser("athenagoddessofwar@gmail.com")

// A Transit Application
const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", 
"Redfern", "Macdonaldtown", "Newtown"];
function travelFrom(from, to) {
// Print the number of stops between the two stations. (e.g. log out "To go from 'Circular Quay' to 'Central' - you'll need to go through 2 stops")
  let indexFrom
  let indexTo
  let numberOfStation
  
  const fromExists = stations.findIndex(element => {
    return element.toLowerCase() === from.toLowerCase()
  })
  console.log(fromExists)
  if (fromExists === -1) {
    console.log(from + " station does not exists")
    return
  }
  
  const toExists = stations.findIndex(element => {
    return element.toLowerCase() === to.toLowerCase()
  })
  if (toExists === -1) {
    console.log(to + " station does not exists")
    return
  }

  for (i=0; i<stations.length; i++) 
  {
    if (stations[i].toUpperCase() === from.toUpperCase()) 
    {
      indexFrom = i
    }
    if (stations[i].toUpperCase() === to.toUpperCase()) 
    {
      indexTo = i - 1
    }
 
    numberOfStation = indexTo - indexFrom
    console.log("To go from '" + from + "' to '" + to + "' - you'll need to go through " + numberOfStation + " stops")
  }
  
  // Print out the names of the stations on separate lines (e.g. log out "- Circular Quay", "- Wynyard", "- Townhall", "- Central")
  for (i=0; i<stations.length; i++) {
    console.log("- " + stations.join("\n- "))
  }
}
// travelFrom("St. James", "redfern")
// Bonus: A Transit Application
// Make this work if you want to go backwards! 
// e.g. 'You want to travel from "Redfern" to "St. James"'
// Make it error-tolerant. E.g.:
// - Make it case-insensitive - there should be no difference between "redfern", "Redfern" and "REDFERN"
// - If someone passes in a station that doesn't exist, tell them
// const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", 
// "Redfern", "Macdonaldtown", "Newtown"];
function travelForwardBackward(from, to) {
    let indexFrom
    let indexTo
    let numberOfStation
    
    // find whether station name exists in array
    const fromExists = stations.findIndex(element => {
      return element.toLowerCase() === from.toLowerCase()
    })
    if (fromExists === -1) {
      console.log(from + " station does not exists")
      return
    }
    
    const toExists = stations.findIndex(element => {
      return element.toLowerCase() === to.toLowerCase()
    })
    if (toExists === -1) {
      console.log(to + " station does not exists")
      return
    }
  
    for (i=0; i<stations.length; i++) 
    {
      if (stations[i].toUpperCase() === from.toUpperCase()) 
      {
        indexFrom = i
      }
      if (stations[i].toUpperCase() === to.toUpperCase()) 
      {
        indexTo = i - 1
      }

      if (!isNaN(indexFrom) && !isNaN(indexTo)) 
      {
        if (indexTo < indexFrom) {
          let indexToBackward = indexTo + 1
          let indexFromBackward = indexFrom - 1
          numberOfStation = indexFromBackward - indexToBackward
        } else {
          numberOfStation = indexTo - indexFrom
        }
        console.log("To go from '" + from + "' to '" + to + "' - you'll need to go through " + numberOfStation + " stops")
      }   
    }
  }
  // travelForwardBackward("Redfern", "museum")

// Make it work across lines! I'll leave it up to you to create the data you need 
// - but create arrays of multiple train lines in Sydney, 
//and try it to get to print out the same things as above 
//- but also things like "Swap lines at ....."
// -- This will be very, very difficult! Don't feel like you have to add in all the lines, 
//just a few to prove that it is working
// -- Look at the hints below
const sydneyTrains = {
  t1 : ["Museum", "St. James", "Circular Quay", "Central"],
  t2 : ["Wynyard", "Townhall", "Central", "Canterbury"]
}
function travelFromMultiple(fromLine, fromStation, toLine, toStation) {
  let indexFrom
  let indexTo
  let numberOfStation
  let numberOfStationT1
  let numberOfStationT2
  let commonStationStop = 1
  
  // find whether station name exists in
  const fromExists = sydneyTrains.t1.findIndex(element => {
    return element.toLowerCase() === fromStation.toLowerCase()
  })
  if (fromExists === -1) {
    console.log(fromStation + " station does not exists")
    return
  }
  
  const toExists = sydneyTrains.t2.findIndex(element => {
    return element.toLowerCase() === toStation.toLowerCase()
  })
  if (toExists === -1) {
    console.log(toStation + " station does not exists")
    return
  }

  // I want to go from Circular Quay (t1) to Canterbury (t2)
  // Take from Circular Quay to common station between t1 & t2
  let commonStationName = ""
  const commonStationList = sydneyTrains.t1.filter((element) => {
    return sydneyTrains.t2.includes(element)
  })
  // console.log(commonStationList)
  for (j=0; j < commonStationList.length; j++) {
    commonStationName = commonStationList[j];
  }
  
  for (i=0; i<sydneyTrains.t1.length; i++) 
  {
    if (sydneyTrains.t1[i].toUpperCase() === fromStation.toUpperCase()) 
    {
      indexFrom = i
    }
    if (sydneyTrains.t1[i].toUpperCase() === commonStationName.toUpperCase()) 
    {
      indexTo = i - 1
    }

    if (!isNaN(indexFrom) && !isNaN(indexTo)) 
    {
      if (indexTo < indexFrom) {
        let indexToBackward = indexTo + 1
        let indexFromBackward = indexFrom - 1
        numberOfStationT1 = indexFromBackward - indexToBackward
      } else {
        numberOfStationT1 = indexTo - indexFrom
      }
      console.log("To go from '" + fromStation + "' to '" + commonStationName + "' - you'll need to go through " + pluralizeWord("stop","stops",numberOfStationT1) + " at line " + fromLine)
      break
    }
  }

  for (k=0; k<sydneyTrains.t2.length; k++) 
  {
    if (sydneyTrains.t2[k].toUpperCase() === toStation.toUpperCase()) 
    {
      indexFrom = k
    }
    if (sydneyTrains.t2[k].toUpperCase() === commonStationName.toUpperCase()) 
    {
      indexTo = k - 1
    }

    if (!isNaN(indexFrom) && !isNaN(indexTo)) 
    {
      if (indexTo < indexFrom) {
        let indexToBackward = indexTo + 1
        let indexFromBackward = indexFrom - 1
        numberOfStationT2 = indexFromBackward - indexToBackward
      } else {
        numberOfStationT2 = indexTo - indexFrom
      }
      console.log("To go from '" + commonStationName + "' to '" + toStation + "' - you'll need to go through " + pluralizeWord("stop","stops",numberOfStationT2) + " at line " + toLine)
      break
    }
  }
  numberOfStation = numberOfStationT1 + numberOfStationT2
  if (numberOfStation === 0)
  {
    numberOfStation = numberOfStation + 1
  }
  console.log("To go from '" + fromStation + "' to '" + toStation + "' - you'll need to go through " + pluralizeWord("stop","stops",numberOfStation))
}
travelFromMultiple("t1", "Circular Quay", "t2", "Canterbury")

// Hints
// You can receive the name of the line! 
//(e.g. travelFrom("t2", "Circular Quay", "t3", "Canterbury"))
// Find the common station! (e.g. "t2" and "t3" both have "Central")
// - Maybe drawing out the lines is a good approach!
// One of the easiest approaches to this is to treat a trip across lines as two separate trips
// An object with arrays stored under the name of the train lines might be a good way 
//to approach it (e.g. const sydneyTrains = { t1: [], t2: [] };
// - Note that if you want to use a variable to decide which line to access 
//- dot notation won't work on an object! You'll have to think of another way 
//(think square brackets!)
// Ask me questions about this if you want though!
// Work together as well - even if it is just in the planning stages
