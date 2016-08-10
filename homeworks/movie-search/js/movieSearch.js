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

var errorMsgWrapper = document.querySelector(".error-msg-wrapper");
var errorText = document.querySelector(".error-text");

var spinner = document.querySelector(".spinner-wrapper");
// Events
// ----------------------------------------------
form.addEventListener('submit', getMovieLists);

results.addEventListener("click", getMovieDetails);
// Event handlers
// ----------------------------------------------
function getMovieLists(e) {
    e.preventDefault();
    var searchKeyword = search.value;
    errorText.innerHTML = "";
    search.classList.remove("error-border");
    errorMsgWrapper.style.display = "none";
    spinner.style.display = "none";

    if (searchKeyword) {
        spinner.style.display = "block";
        json = reqwest({
            url: ' http://omdbapi.com/?s=' + searchKeyword,
            crossOrigin: true,
            success: function (resp) {
              updateSearchResult(resp);
          },
          complete: function() {
              spinner.style.display = "none";
          }
        });
    }
    else {
        errorMsgWrapper.style.display = "block";
        search.classList.add("error-border");
        errorText.innerHTML = "Please enter movie title";
    }
}

function getMovieDetails(e) {
    spinner.style.display = "block";
    var target = e.target;

    if (target.tagName != "LI") {
        target = target.closest("li");

        var movieId = target.id;

        json = reqwest({
            url: 'http://omdbapi.com/?i=' + movieId,
            crossOrigin: true,
            success: function(resp) {
                showMovieDetail(resp);
            },
            complete: function() {
                spinner.style.display = "none";
            }
        });
    }
}
// Update page
// ----------------------------------------------
function updateSearchResult(json) {
    results.innerHTML = "";
    detailsImage.innerHTML = "";
    detailsText.innerHTML = "";
    json["Search"].forEach(createMovieList);
    search.value = "";
}

function createMovieList(movie) {
    var list = document.createElement("li");
    var title = document.createElement("p");
    var posterSrc =  movie["Poster"];

    list.id = movie["imdbID"];
    title.innerHTML = movie["Title"];

    // Check if poster image is available
    if (posterSrc == "N/A") {
        var emtpyPosterDiv = document.createElement("div");
        emtpyPosterDiv.innerHTML = "X";
        emtpyPosterDiv.classList.add("empty-poster");
        list.appendChild(emtpyPosterDiv);
    }
    else {
        var poster = document.createElement("img");
        poster.setAttribute("src", posterSrc);
        list.appendChild(poster);
    }

    list.appendChild(title);
    results.appendChild(list);
}

function showMovieDetail(movie) {
    detailsImage.innerHTML = "";
    detailsText.innerHTML = "";

    var h2 = document.createElement("h2");
    h2.classList.add("title");

    var p = document.createElement("p");
    p.classList.add("plot");

    var a = document.createElement("a");
    a.classList.add("imdb-link");

    var posterSrc = movie["Poster"];

    if (posterSrc == "N/A") {
        var emtpyPosterDiv = document.createElement("div");
        emtpyPosterDiv.innerHTML = "X";
        emtpyPosterDiv.classList.add("empty-poster");
        emtpyPosterDiv.classList.add("large-poster");
        detailsImage.appendChild(emtpyPosterDiv);
    }
    else {
        var img = document.createElement("img");
        img.classList.add("poster");
        img.setAttribute("src", posterSrc);
        detailsImage.appendChild(img);
    }

    var imdbUrl = "http://www.imdb.com/title/" + movie["imdbID"];

    h2.innerHTML = movie["Title"];
    p.innerHTML = movie["Plot"];
    a.setAttribute("href", imdbUrl);
    a.innerHTML = "View on IMDb";

    detailsText.appendChild(h2);
    detailsText.appendChild(p);
    detailsText.appendChild(a);

}
