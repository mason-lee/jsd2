// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');


// Templates
// ------------------------------------------
var dateTemplate = document.querySelector("#date-template");
var gameTemplate = document.querySelector("#game-template");

// Compiling the template source. Template function returns String!
var template = Handlebars.compile(dateTemplate.innerHTML);
date.innerHTML = template(mockdata);

template = Handlebars.compile(gameTemplate.innerHTML);
games.innerHTML = template(mockdata.games);
