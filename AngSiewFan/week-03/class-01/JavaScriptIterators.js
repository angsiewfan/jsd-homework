// .forEach() and .filter()
// Write a function named onlyEven that returns evens numbers in an array. 
// Write one version that use forEach and then write another version that uses filter
// onlyEven([1,2,3,4,5,6,7]) // => [2,4,6]
let numbers = [1,2,3,4,5,6,7]

// .foreach()
function onlyEven_forEach(num) {
    if (num % 2 === 0) {
        console.log(num);
    }
}
numbers.forEach(onlyEven_forEach);

// .filter()
function onlyEven_Filter(num) {
    return num % 2 === 0;
}
let evenFilter = numbers.filter(onlyEven_Filter);

// Aiman
// function onlyEven(nums) {
//     return nums.filter((num) => num % 2 === 0)
// }
// console.log(onlyEven(numbers))

// .forEach() or .filter()
// countIntegers – counts how many integers there are in an array
// countIntegers([4, 2.2, 5, 6, 4.2, 8.2, 4]) // => 4
// Hint: Google how you can check if a number is an integer in JavaScript

// .filter()
function countIntegers() {
    let integers = [4, 2.2, 5, 6, 4.2, 8.2, 4];
    return integers.filter((num) => num % 1 === 0)
}
console.log(`Total integer: ${countIntegers().length}`)

// .forEach()
function countIntegers_forEach() {
    let integers = [4, 2.2, 5, 6, 4.2, 8.2, 4];
    return integers.forEach((element) => {
        if (element % 1 === 0) {
        console.log(element)
        }
    })
}

// .map() oldie but goodie
// Write a function lengths that accepts a single parameter as an argument, namely an array of strings.
// The function should return an array of numbers where each number is the length of the corresponding
// string. use .map
// lengths(['my', 'cake', 'pudding']); // => [2,4,7]
let arrString = ['my', 'cake', 'pudding'];
function lengths(str) {
    return str.length;
}
let strLen = arrString.map(lengths)
// console.log(strLen)

// .map()
// getSquares – takes in an array of numbers and returns an array of their squares. 
// If you want more practice write one version using .forEach and 
// then write another version using .map
// getSquares([1, 2, 3, 4, 5]) // => [1, 4, 9, 16, 25]
// .map()
let num2 = [1, 2, 3, 4, 5]
function getSquares(num) {
    return num * num
}
let squares = num2.map(getSquares)
console.log(squares)

// .forEach()
function getSquares_forEach() {
    return num2.forEach((element) => console.log(element * element));
}
getSquares_forEach()

// .map(), .filter() & .reduce()
// Write an expression using array iterator methods (like filter and reduce) to
//Use arrow functions.
var inventory = [
  {type:   "machine", value: 5000},
  {type:   "machine", value:  650},
  {type:      "duck", value:   10},
  {type: "furniture", value: 1200},
  {type:   "machine", value:   77}
]
// compute the total value of the machines in the inventory array. 
function totalValue(inventory) {
    let machines = inventory.filter((item) => item.type === 'machine')
    
    let reduce = machines.reduce((currentTotal, currentNum) => {
        return currentTotal += currentNum.value
    },0)
    return reduce;
    
    // Aiman
    // let totalValue = inventory
    //   .filter((item) => item.type === 'machine')
    //   .reduce((total, machine) => {
    //     return (total += machine.value)
    //   }, 0)
    // return totalValue
  }
console.log(`Total value of machine: ${totalValue(inventory)}`)

// Get an array of all the machines with value over 500
function machinesOver500(inventory) {
    let machines = inventory.filter((item) => item.type === 'machine')
    
    return machines.filter((item) => item.value > 500)
    
    // Aiman
    // return inventory
    // .filter(item => item.type === 'machines')
    // .filter(item => item.value > 500)
}
console.log(machinesOver500(inventory))