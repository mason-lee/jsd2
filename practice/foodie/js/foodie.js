// Structure
// ------------------------------------
var results = document.querySelector(".results");
var form = document.querySelector("form");
var zip = document.querySelector(".zip");
var restaurantTemplate = document.querySelector("#restaurant-template");
var resultsNumberTemplate = document.querySelector("#results-number-template");
var totalCount = document.querySelector(".total-count");

// Events
// ------------------------------------
form.addEventListener('submit', getRestaurants);

// Event Handler
// ------------------------------------
function getRestaurants(event) {
    event.preventDefault();
    var searchKeyword = zip.value;
    var url = "https://opentable.herokuapp.com/api/restaurants?page=2&zip=" + searchKeyword + "&page=1";
    $.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
    results.innerHTML = "";

    // Compiling the template source. Template function returns String!
    var template = Handlebars.compile(restaurantTemplate.innerHTML);

    results.innerHTML = template(json.restaurants);

    template = Handlebars.compile(resultsNumberTemplate.textContent);
    totalCount.innerHTML = template(json);



    //json.restaurants.forEach(createRestaurantTemplate);
    zip.value = "";
}


// // Intro to templating.
// function createRestaurantTemplate(restaurant) {
//     var list = document.createElement("li");
//
//     var template =
//         ' <img src=" ' + restaurant.image_url + ' ">' +
//         '<h2>' + restaurant.name + '</h2>' +
//         '<p>' + restaurant.address + '</p>';
//
//     list.innerHTML = template;
//     results.appendChild(list);
// }
//
//
// // Old way of doing it.
// function createRestaurant(restaurant) {
//     var list = document.createElement("li");
//     var resName = document.createElement("h2");
//     var resAddress = document.createElement("p");
//     var resImage = document.createElement("img");
//
//     resName.innerHTML = restaurant.name;
//     resAddress.innerHTML = restaurant.address;
//     resImage.setAttribute("src", restaurant.image_url);
//
//     list.appendChild(resImage);
//     list.appendChild(resName);
//     list.appendChild(resAddress);
//     results.appendChild(list);
// }
