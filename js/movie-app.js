"use strict";

const apiURL = 'https://knowing-healthy-price.glitch.me/movies'


//Setting for all API info
const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error);
// //Setting to create new movie
// const test = {title: 'Red', body: 'Blue!'};
//
// const addMovie = (addNewMovie) => fetch(`${apiURL}`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(`Success: created ${JSON.stringify(data)}`);
//         return data.id;
//     })
//     .catch(console.error);
//
// function addNewMovie(){
//     let newMovieTitle = newMovieTitleInput.value;
//     let newMovie = {
//         title: newMovieTitle
//     }
//     movies.push(newMovie)
// }
// var movieInput = document.querySelector(#movie-input)
//
function addNewMovie (){
    var formData = {
        'title'              : $('input[name=title]').val(),
        'rating'             : $('input[name=rating]').val(),
        // 'superheroAlias'    : $('input[name=superheroAlias]').val()
    };

    // process the form
    $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url         : apiURL, // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode          : true
    })
        // using the done promise callback
        .done(function(data) {

            // log data to the console so we can see
            console.log(data);

            // here we will handle errors and validation messages
        });

    // stop the form from submitting the normal way and refreshing the page
    event.preventDefault();
}
// $("form").on("submit", function(event){
//     event.preventDefault();
//
//     var formValues= $(this).serialize();
//
//     $.post("process_form.php", formValues, function(data){
//         // Display the returned data in browser
//         $("#result").html(data);
//     });
// });
$('#movie-form').on("submit", function(event) {
    // get the form data
    // there are many ways to get this data using jQuery (you can use the class or id also)
    event.preventDefault();
    var formData = {
        'title'              : $('input[name=title]').value(),
        'rating'             : $('input[name=rating]').value(),
        // 'superheroAlias'    : $('input[name=superheroAlias]').val()
    };

    // process the form
    $.ajax({
        type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
        url         : apiURL, // the url where we want to POST
        data        : formData, // our data object
        dataType    : 'json', // what type of data do we expect back from the server
        encode          : true
    })
        // using the done promise callback
        .done(function(data) {

            // log data to the console so we can see
            console.log(data);

            // here we will handle errors and validation messages
        });

    // stop the form from submitting the normal way and refreshing the page
    return false;
});

// });
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














