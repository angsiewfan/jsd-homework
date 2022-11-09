// Exercise: More DOM Manipulation
let body = document.querySelector("body")
body.style.fontFamily = "Arial, sans-serif"

let listSpan = document.querySelectorAll("li span")
listSpan[0].innerHTML = "ang"
listSpan[1].innerHTML = "watching tv"
listSpan[2].innerHTML = "anywhere"

let list = document.querySelectorAll("li")

for (i=0; i<list.length; i++) {
    list[i].setAttribute("class", "list-item")
}

let image = document.createElement("img")
image.src = "https://picsum.photos/400/300"
let heading = document.querySelector("h1")
document.body.insertBefore(image, heading);
