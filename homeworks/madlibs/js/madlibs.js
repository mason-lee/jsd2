// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Helper function for generating random number
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Event Listeners
// ------------------------------------------
function generateStartup() {

	// TODO: generate two random index numbers, one for each array
	var random1 = getRandomInt(0, startupX.length-1);
	var random2 = getRandomInt(0, startupY.length-1);
	var startup1 = startupX[random1];
	var startup2 = startupY[random2];
	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"
	startupIdea = 'A startup that is' + ' ' + startup1 + ' ' + 'but for' + ' ' + startup2;

	// Update page with new startup idea
	startup.innerHTML = startupIdea;
}

function saveFavorite() {
	// TODO: add the new idea to the array
	favorites.push(startupIdea);
}

function printFavorites() {
	var favoritesText;

	// clear out favorites element
	list.innerHTML = '';

    // TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")

	/**
		This adds "undefined".
	**/
	// favorites.forEach(function(item) {
	// 	favoritesText = favoritesText + item + "<br>";
	// });

    favoritesText = favorites.join("<br>");
    
	// update the list element with the new concatenated string
	list.innerHTML = favoritesText;
}


// Init
// ------------------------------------------
generateStartup();
