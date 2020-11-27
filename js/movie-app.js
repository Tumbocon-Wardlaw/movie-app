"use strict";

const apiURL = 'https://knowing-healthy-price.glitch.me/movies'


//Setting for all API info
const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error);

//MOVIE IMAGES

let movieArray = [
    "movie 1.jpeg",
    "movie 2.jpg",
    "movie 3.jpeg",
    "movie 4.jpg"
]

//Setting to create new movie
// const test = {title: 'Red', body: 'Blue!'};

let newMovieArray = [];


    $('#submit').on('click', function(){
        $(".lootname").each(function () {
            lootnameObj = {};
            lootnameObj[$(this).attr('name')] = $(this).attr('name').val();
            newMovieArray.push(lootnameObj);

        });
    });



const addMovie = (input) => fetch(`${apiURL}`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(input)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: created ${JSON.stringify(data)}`);
        return data.id;
    })
    .catch(console.error);




//addMovie() to push info to server
//connect addMovie() to the form



// START OF DELETE FEATURE
const deleteMovie = id => fetch(`${apiURL}/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(res => res.json())
    .then(() => {
        console.log(`Success: deleted movie with id of ${id}`);
    })
    .catch(console.error);

$(document).on('click', '.card-holder .delete', function(){
    $(this).closest('.card-holder').remove();
})














