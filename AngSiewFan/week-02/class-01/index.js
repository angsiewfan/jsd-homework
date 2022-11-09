// let heading = document.querySelector("h1")
// // heading.innerHTML = "Something else"

// // create a variable called subheading
// // through the DOM and find h2
// let subheading = document.querySelector("h2")

// // create a variable called "paragraph" by searching through the DOM and find p
// let paragraph = document.querySelector("p")
// // let paragraph2 = document.querySelector("p")

// console.log(heading, subheading, paragraph)

// // create a variable called "listItem" by searching
// // through DOM & find li
// let listItem = document.querySelector("li")

// let allListItems = document.querySelectorAll("li")
// let allParagraph = document.querySelectorAll("p")

// //The DOM Detective - in class exercise
// document.querySelector("title")
// document.querySelector(".navi_banner-container a")
// document.querySelector(".navi_menu .highlight a")
// document.querySelector("h1")
// document.querySelectorAll(".navi_menu_dropdown .navi_menu_dropdown_item li")
// // noOfCampus
// document.querySelector('a[href="/locations"] div[class="facts_list_item_quantity"]')

// let noOfInstructors = document.querySelector(".facts_list_item_quantity")[2]
// noOfInstructors.innerHTML

// // The logos of GA's featured clients and hiring partners
// document.querySelector(".Employers__list___1cuG_" )

// // GA's social links at the bottom (Facebook, Twitter, LinkedIn, Instagram, YouTube)
// document.querySelectorAll(".navi_footer-grid a")

// // The input where you add your email to sign up for the newsletter (in the footer)
// document.querySelector(".navi_footer-signup-input input")

// innerHTML vs innerText
// let subHeading = document.querySelector("h2")
// console.log(subHeading.innerText)
// console.log(subHeading.innerHTML)
// subHeading.innerText = "Changed by JS"
// subHeading.innerHTML = "Changed by JS"
// subHeading.innerText = "<u> Changed </u> by JS"
// subHeading.innerHTML = "<u> Changed </u> by JS"
// subHeading.innerHTML = "BEFORE " + subHeading.innerHTML

// let image = document.querySelector("img")
// let currentSrc = image.getAttribute("src")

// let anchor = document.querySelector(".container a")
// let currentHref = anchor.getAttribute("href") 

// // how to get id
// console.log(anchor.getAttribute("id"))

// let anchor = document.querySelector(".container a")
// anchor.setAttribute("href","https://www.google.com")
// anchor.setAttribute("id","google")

// // change text "this link" to "Google!"
// anchor.innerHTML = "Google!"

// let input = document.querySelector("input")
// let currentValue = input.value

// let heading = document.querySelector("h1")
// let headingStyles = getComputedStyle(heading)
// console.log(headingStyles)

// // change the font of the text to be 100
// heading.style.fontSize = "100px"

// // change the color of the text to red
// heading.style.color = "red"

// // change the text decoration to be underline
// heading.style.textDecoration = "underline"

// // italic
// heading.style.fontStyle = "italic"

// //uppercase
// heading.style.textTransform = "uppercase"

// //change image width to "200px"
// let image = document.querySelector("img")
// image.style.width = "300px"

// //change the image border to be "10px solid blue"
// image.style.border = "10px solid blue"

//2. Exercises: Working with the CSSOM (to submit)
// Replace the Logo
// Visit Google's website in Chrome, and open up the console.
// Find the Google logo and store it in a variable using DOM traversal
// Save the current src attribute into a variable
// Modify the source of the logo IMG so that it's a Yahoo logo instead.
// You can use this url for the Yahoo Logo: https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg
// Hint: You may need to figure out how to remove the srcset attribute for this!
// logo = document.querySelector(".lnXdpd")
// <img class=​"lnXdpd" alt=​"Google" height=​"92" src=​"/​images/​branding/​googlelogo/​2x/​googlelogo_color_272x92dp.png" srcset=​"https:​/​/​s.yimg.com/​rz/​p/​yahoo_homepage_en-US_s_f_p_bestfit_homepage.png" width=​"272" data-atf=​"1" data-frt=​"0">​
// logo.srcset = " https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg"
// ' https://cdn.vox-cdn.com/thumbor/JiRzoaU535Vs9YjU6LcJSvIGFBs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19224216/mb_yahoo_02.jpg'

// // Find the Google search button and store it in a variable.
// // Modify the text of the button so that it says "Yahooo!" instead
// search = document.querySelector(".FPdoLc.lJ9FBc .gNO89b")
// search.value = "Yahooo!"

//3. Exercise: More DOM Manipulation


// // creating own html via js
// let myParagraph = document.createElement("p")
// myParagraph.innerText = "CREATED WITH JS"
// //nothing happens

// document.body.appendChild(myParagraph)
// //append.child = add DOM nodes to the end of body tag

// //add before h1
// let heading = document.querySelector("h1")
// document.body.insertBefore(myParagraph, heading)

// // create h3
// // set the text to be "Also created by JS"
// // set the following styles
// // font style to be 30px
// // color to be green
// // add it before the h2 on the page
// let subHeading = document.querySelector("h2")
// let header3 = document.createElement("h3")
// header3.innerHTML = "Also created by JS"
// header3.style.font = "30px"
// header3.style.color = "green"
// document.body.insertBefore(header3, subHeading)

// // events
// let heading = document.querySelector("h1")

// function onClick() {
//     console.log("The page was clicked")
// }

// heading.addEventListener("click", onClick)

// // select h2 using querySelector and save it as subheading
// // create a function that logs "The h2 was clicked"
// // call this function subHeadingClicked
// //Anytime the subheading is clicked, call the function subHeadingClicked
// let subHeading = document.querySelector("h2")

// function onClickH2 () {
//     console.log("The h2 was clicked")
// }
// subHeading.addEventListener("click", onClickH2)

// // select the input DOM node using query selector
// // create function that logs "The user typed something"
// //when the "keypress" event takes place on the input DOM, run the function
// let input = document.querySelector("input")
// function onKeyPress() {
//     // make this dynamic using the current value of input
//     // everytime this function runs, log out the current value of the input
//     console.log(input.value)
// }
// input.addEventListener("keypress", onKeyPress)
// // input.addEventListener("keyup", onKeyPress)
// // input.addEventListener("keydown", onKeyPress)

// // mouse movement
// let img = document.querySelector("img")
// function onMouseMove() {
//     console.log("The mouse is moving")
// }
// img.addEventListener("mousemove", onMouseMove)

// // when the first item is clicked
// // call a function that logs out the "The First Item was clicked"
// let firstItem = document.querySelectorAll("li")[0]
// function onClickFirst() {
//     console.log("The First Item was clicked")
// }
// firstItem.addEventListener("click", onClickFirst)

// // delayed function 
// // setTimout
// function delayedFunction() {
//     console.log("This function should be delayed")
// }
// // delayedFunction()
// setTimeout(delayedFunction, 2000) //call the delayedFunction in 2 seconds time

// // setInterval
// function regularlyCalledFunction() {
//     console.log("This should be called every three seconds")
// }
// setInterval(regularlyCalledFunction, 3000)

// let img = document.querySelector("img")
// // img.style.width = "150px"

// function increaseWidth() {
//     let styles = getComputedStyle(img) //get image attributes
//     let currentWidth = parseInt(styles.width)
//     let newWidth = currentWidth + 5
//     img.style.width = newWidth + "px"
// }
// how can we delayfor 5 seconds
// setTimeout(increaseWidth, 5000)
// setInterval(increaseWidth, 10)

// mouse movement
// function onMouseMove(event) {
//     console.log("The mouse was moving")
// }
// document.body.addEventListener("mousemove", onMouseMove)

// example 2
// function onMouseMove(event) {
//     console.log("The mouse was moving", event) // show mouse coordination
// }
// document.body.addEventListener("mousemove", onMouseMove)

// example 3 
let img = document.querySelector("img")
function onMouseMove(event) {
    const x = event.clientX
    const y = event.clientY

    // img.style.left = x + "px"
    // img.style.right = y + "px"
    // img.style.top = x + "px"
    // img.style.bottom = y + "px"

    img.style.left = event.pageX + 'px';
    img.style.top = event.pageY + 'px';
}
document.body.addEventListener("mousemove", onMouseMove)
