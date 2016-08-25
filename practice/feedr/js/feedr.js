// Setup
// -----------------------------------------------------------------------
var newsApiKey = "2a24e8547c204bc5975d110569a6a2c5";
var returnedData;

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

function togglePopUp() {
    popup.classList.toggle("hidden");
}
