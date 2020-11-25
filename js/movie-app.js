"use strict";

const apiURL = 'https://knowing-healthy-price.glitch.me/movies'


//Setting for all API info
const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error);
//Setting to create new movie
// const test = {title: 'Red', body: 'Blue!'};

const addMovie = (addNewMovie) => fetch(`${apiURL}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(addNewMovie())
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: created ${JSON.stringify(data)}`);
        return data.id;
    })
    .catch(console.error);

function addNewMovie(){
    let newMovieTitle = newMovieTitleInput.value;
    let newMovie = {
        title: newMovieTitle
    }
    movies.push(newMovie)
}

var movieInput = document.querySelector(#movie-input)




