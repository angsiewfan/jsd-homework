const colOne = document.querySelector('.col-1')
const colTwo = document.querySelector('.col-2')
const section = document.querySelector('section')
const searchInput = document.querySelector("input")
const searchAll = "s"

let processData = (search) => {

// query strings
let url = 'https://www.omdbapi.com/'
let queryStrings = `?apikey=2d7a9c3&${searchAll}=${search}`

fetch(url + queryStrings).then((response) => {
    return response.json()
    // return promise
    // handling the success
})
.then((data) => {
    /* EXERCISE API > RENDER ARRAY USING MAP METHOD */
    console.clear();
    let movieArr = data.Search;

    section.innerHTML = "";

    movieArr.map((movie) => {
        // destructuring object / destructuring array 
        let { Title:title, Year:year, Poster:urlPoster, Type: type } = movie

        // result = movie data & poster side by side
        section.innerHTML += `
        <div>
        <h2>Title - ${title}</h2>
        <p>Year Released - ${year}</p>    
        <p>Type - ${type}</p>
        </div>
        <div>
        <img src=${urlPoster}</img>
        </div>
        `
     })

})
.catch((error) => {
    console.log(error)
    console.log('there\'s and error')
})

}

/*
Create an input to Search the Title of the Movie
Dynamically change the url query strings to do that
*/
searchInput.addEventListener('change', (e) => {
    // console.log(e.target.value)
    let search = e.target.value
    processData(search)
})

/* SEARCH USING QUERY STRING OF PARAMETER S IN OMDBAPI */
