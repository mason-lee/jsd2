// Setup
// -----------------------------------------------------------------------
var newsApiKey = "2a24e8547c204bc5975d110569a6a2c5";
var returnedData;
var titles = [];
// Structure
// -----------------------------------------------------------------------
var articleWrapper = document.querySelector("#main");
var sourceList = document.querySelector(".source-list");
var selectedSrcName = document.querySelector(".selected-source");
var popup = document.querySelector("#article-popup");
var popupArticleTitle = document.querySelector(".article-title");
var popupArticleDescription = document.querySelector(".article-description");
var popupArticleUrl = document.querySelector(".article-url");
var closePopUp = document.querySelector(".closePopUp");
var loadingPopup = document.querySelector("#popUp");
var homeLink = document.querySelector(".home-link");
var searchIcon = document.querySelector(".searchIcon");
var searchInput = document.querySelector("#searchInput");
var searchBox = document.querySelector("#search");
// Templates
// ------------------------------------------------
var articleTemplate = document.querySelector("#article-template");
var popupTemplate = document.querySelector("#popup-template");

// Events
// -----------------------------------------------------------------------
window.onload = init();
homeLink.addEventListener("click", init);
sourceList.addEventListener("click", getNewsSource);
articleWrapper.addEventListener("click", seeMore);
closePopUp.addEventListener("click", togglePopUp);
searchIcon.addEventListener("click", toggleSearchBox);
searchInput.addEventListener("keyup", searchArticle);

// Event Handlers
// -----------------------------------------------------------------------
function init() {
    getHeadLines("techcrunch");
    selectedSrcName.innerHTML = "Techcrunch";
}

function getNewsSource(e) {
    if (e.target.tagName != "A") {
        return;
    }
    var selectedSource = e.target.dataset.newsSource;
    selectedSrcName.innerHTML = e.target.innerHTML;
    getHeadLines(selectedSource);
}

function getHeadLines(source) {
    loadingPopup.classList.toggle("hidden");

    json = reqwest({
        url: 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + newsApiKey,
        crossOrigin: true,
        success: function (resp) {
            renderArticle(resp);
        },
        complete: function() {
            loadingPopup.classList.toggle("hidden");
        }
    });
}

// Render Articles
function renderArticle(json) {
    returnedData = json.articles;
    // Add titles to array for search
    returnedData.forEach(function(e, i) {
        titles.push(returnedData[i].title.toLowerCase());
    });
    // Compiling the template source. Template function returns String!
    var template = Handlebars.compile(articleTemplate.innerHTML);
    articleWrapper.innerHTML = template(returnedData);
}

// See more about article
function seeMore(e) {
    var article = e.target.closest(".article");
    var articleIndex = article.dataset.index;
    var selectedArticle = returnedData[articleIndex];
    popupArticleTitle.textContent = selectedArticle["title"];
    popupArticleDescription.textContent = selectedArticle["description"];
    popupArticleUrl.href = selectedArticle["url"];
    togglePopUp();
}

// Search aticles
function searchArticle() {
    // console.log(titles);
    var userInput = searchInput.value;
    // var tempArray = [];
    titles.forEach(function(e, i) {
        if (titles[i].match(userInput)) {
            // console.log(titles[i], i);
            var searchResult = document.querySelectorAll('[data-index="'+i+'"]');
            // tempArray.push(searchResult);
            console.log(searchResult);
        }
    });
}

// Toggle popUp
function togglePopUp() {
    popup.classList.toggle("hidden");
}

// Toggle Searchbox
function toggleSearchBox() {
    searchBox.classList.toggle("active");
}

// Format date
Handlebars.registerHelper("formatDate", function(publishedAt) {
    return Date.parse(publishedAt).toString('MMMM dS, yyyy');
});
