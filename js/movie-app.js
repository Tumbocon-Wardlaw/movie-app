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

// let newMovieArray = [];
//
//
//     $('#submit').on('click', function(){
//         $(".lootname").each(function () {
//             lootnameObj = {};
//             lootnameObj[$(this).attr('name')] = $(this).attr('name').val();
//             newMovieArray.push(lootnameObj);
//
//         });
//     });

//Link form submit to Crud function
//Grab value out of form inputs
//Add click event listener on submit button, grab values as strings and pass them out.

//create jquery object that takes values from field
//use a let object, put it inside the event listener

// event addEventListener("MSGestureDoubleTap", call the add function (let))


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




// console.log(addMovie(test));


//addMovie() to push info to server
//connect addMovie() to the form


//Link delete CRUD function

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

//EDIT MOVIE FEATURE

const editMovie = movie => fetch(`${apiURL}/${movie.id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(movie)
})
    .then(res => res.json())
    .then(data => {
        console.log(`Success: edited ${JSON.stringify(data)}`);
    })
    .catch(console.error);

// const updateTitle = document.querySelector('input[name="updateTitle"]') //selecting the input with name property "name"
// const updateRating = document.querySelector('input[name="updateRating"]') //selecting the input with name property "name"
// const updateFormButton = document.querySelector("button#updateMovie") //select button with id "createitem"
//
//
// const updateButton = document.createElement(`button`) //create update button
// updateButton.id = index
// updateButton.innerText = "Update" //make the delete button say "Delete"
// updateButton.addEventListener("click", event => {
//     updateTitle.value = movie.title //set form to show current title
//     updateRating.value = movie.rating //set form to show current rating
//     updateFormButton.setAttribute("toupdate", index) //custom attribute to use in the button event later
// })
//
// buttonContainer.appendChild(updateButton) //apend the delete button
//
// personH1.innerText = `${person.name} is ${person.age} years old` //ads text to the h1
// mainDiv.appendChild(personH1) //append the h1 to the main element
// mainDiv.appendChild(buttonContainer) //append container of update and delete button
// })
// }
// const updateData = event => {
//     const index = event.target.getAttribute("toupdate") //get index we stored via custom attribute
//     const name = updateTitle.value //get value from form
//     const age = updateRating.value //get value from form
//     movie[index] = { title, rating } //replace existing object at that index with a new with updated values
//     renderData() //update the DOM with the new data
// }
















