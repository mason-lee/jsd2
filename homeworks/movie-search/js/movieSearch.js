// Setup
// ----------------------------------------------

// Structure
// ----------------------------------------------
var search = document.querySelector(".search");
var form = document.querySelector("#movie-searcher");
var results = document.querySelector(".results");

var details = document.querySelector(".details");
var detailsImage = document.querySelector(".image");
var detailsText = document.querySelector(".text");

// Events
// ----------------------------------------------
form.addEventListener('submit', getMovieLists);

results.addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == "LI") {
        console.log("clicked");
        var movieId = e.target.id;

        json = reqwest({
            url: 'http://omdbapi.com/?i=' + movieId,
            crossOrigin: true,
            success: function(resp) {
                showMovieDetail(resp);
            }
        });
	}
});
// Event handlers
// ----------------------------------------------
function getMovieLists(e) {
    e.preventDefault();
    var searchKeyword = search.value;

    json = reqwest({
        url: ' http://omdbapi.com/?s=' + searchKeyword,
        crossOrigin: true,
        success: function (resp) {
          updateSearchResult(resp);
        }
    });
}

// Update page
// ----------------------------------------------
function updateSearchResult(json) {
    results.innerHTML = "";
    json["Search"].forEach(createMovieList);
    search.value = "";
}

function createMovieList(movie) {
    var list = document.createElement("li");
    var poster = document.createElement("img");
    var title = document.createElement("p");

    // set id
    list.id = movie["imdbID"];
    title.innerHTML = movie["Title"];
    poster.setAttribute("src", movie["Poster"]);

    list.appendChild(poster);
    list.appendChild(title);
    results.appendChild(list);
}

function showMovieDetail(movie) {
    detailsImage.innerHTML = "";
    detailsText.innerHTML = "";

    var img = document.createElement("img");
    img.classList.add("poster");

    var h2 = document.createElement("h2");
    h2.classList.add("title");

    var p = document.createElement("p");
    p.classList.add("plot");

    var a = document.createElement("a");
    a.classList.add("imdb-link");

    var imdbUrl = "http://www.imdb.com/title/" + movie["imdbID"];

    img.setAttribute("src", movie["Poster"]);
    h2.innerHTML = movie["Title"];
    p.innerHTML = movie["Plot"];
    a.setAttribute("href", imdbUrl);
    a.innerHTML = "View on IMDb";

    detailsImage.appendChild(img);
    detailsText.appendChild(h2);
    detailsText.appendChild(p);
    detailsText.appendChild(a);

}
