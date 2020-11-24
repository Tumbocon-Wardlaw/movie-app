"use strict";

const apiURL = 'https://knowing-healthy-price.glitch.me/db';

// @returns {Promise<void>}

const getMovies = () => fetch(apiURL)
    .then(res => res.json())
    .catch(console.error);

console.log(getMovies());

// console.log("hello");