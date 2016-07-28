// Structure
// ------------------------------------------
var form = document.querySelector("body form");
var inputField = document.querySelector(".new-thing");
var thingList = document.querySelector("#fav-list");
// Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);


// Event Listeners
// ------------------------------------------
function createNewThing(e) {
    e.preventDefault();
    var newThing = inputField.value;
    addToList(newThing);
    // Save to local storage
    localStorage.setItem('Things', newThing);
}


// Update Page function
// ------------------------------------------
function addToList(newThing) {
    var newElementThing = document.createElement("li");
    newElementThing.innerHTML = newThing;
    thingList.appendChild(newElementThing);
    // Resets the form
    form.reset();
}
