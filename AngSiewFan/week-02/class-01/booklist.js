const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
  ];

// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.
// If you have read it, make the text color green. If you haven't, make the text color red.
let body = document.querySelector("body")
for (i=0; i<books.length; i++)
{
    let paragraph = document.createElement("p")
    paragraph.innerHTML = "Title: " + books[i].title + " | Author: " + books[i].author
    body.appendChild(paragraph)

    if (books[i].alreadyRead === true)
    {
        paragraph.style.color = "green"
    }
    else
    {
        paragraph.style.color = "red"
    }
}
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page
for (i=0; i<books.length; i++)
{
    let createUl = document.createElement("ul")
    document.body.appendChild(createUl)

    let createLi = document.createElement("li")
    createLi.innerHTML = "Title: " + books[i].title + " | Author: " + books[i].author
    createUl.append(createLi);
    
    let a = document.createElement("a")
    a.setAttribute("href","https://www.google.com")
    a.innerHTML="<br>Book cover";
    createLi.append(a)

    let image = document.createElement("img")
    image.src = "https://picsum.photos/400/300"

    document.body.appendChild(image);
}
