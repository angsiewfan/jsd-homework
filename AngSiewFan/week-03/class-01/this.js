let img = document.querySelector("img");
function handleClick() {
 console.log( this );
}
img.addEventListener("click", handleClick);

// let person = {
//     name: "Groucho",
//     speak: function(greeting,name2) {
//         console.log(greeting,name2)
//         console.log(this, this.name);
//         console.log(person, person.name);
//     }
//    };
//    person.speak('hello','Ean');
console.clear();

function sayHello() {
    console.log('Hello ' + this.name)
}
let person = { name: "Zeppo" };
sayHello.apply(person);

