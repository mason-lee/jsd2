// Structure
// ------------------------------------
var results = document.querySelector(".results");
var form = document.querySelector("form");
var zip = document.querySelector(".zip");


// Events
// ------------------------------------
form.addEventListener('submit', getRestaurants);

// Event Handler
// ------------------------------------
function getRestaurants(event) {
    event.preventDefault();
    var searchKeyword = zip.value;
    var url = "https://opentable.herokuapp.com/api/restaurants?page=2&zip=" + searchKeyword;
    $.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
    results.innerHTML = "";
    json.restaurants.forEach(createRestaurant);
    zip.value = "";
}

function createRestaurant(restaurant) {
    var list = document.createElement("li");
    var resName = document.createElement("h2");
    var resAddress = document.createElement("p");
    var resImage = document.createElement("img");

    resName.innerHTML = restaurant.name;
    resAddress.innerHTML = restaurant.address;
    resImage.setAttribute("src", restaurant.image_url);

    list.appendChild(resImage);
    list.appendChild(resName);
    list.appendChild(resAddress);
    results.appendChild(list);
}
