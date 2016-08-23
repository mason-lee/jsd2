// Setup
// -----------------------------------------------------------------------
var newsApiKey = "2a24e8547c204bc5975d110569a6a2c5";

// Structure
// -----------------------------------------------------------------------
var articleWrapper = document.querySelector("#main");
var sourceList = document.querySelector(".source-list");
var selectedSource = document.querySelector(".selected-source");
var popup = document.querySelector("#popUp");
var articleTitle = document.querySelector(".article-title");
var articleDescription = document.querySelector(".article-description");
var articleUrl = document.querySelector(".article-url");

// Templates
// ------------------------------------------------
var articleTemplate = document.querySelector("#article-template");
var popupTemplate = document.querySelector("#popup-template");

// Events
// -----------------------------------------------------------------------
window.onload = init();
sourceList.addEventListener("click", getNewsSource);
articleWrapper.addEventListener("click", seeMore);

// Event Handlers
// -----------------------------------------------------------------------
function init() {
    getHeadLines("techcrunch");
}

function getNewsSource(e) {
    if (e.target.tagName != "A") {
        return;
    }
    var selectedSource = e.target.dataset.newsSource;
    getHeadLines(selectedSource);
}

function getHeadLines(source) {
    json = reqwest({
        url: 'https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + newsApiKey,
        crossOrigin: true,
        success: function (resp) {
            console.log(resp);
            renderArticle(resp);
      },
      complete: function() {
        //   spinner.style.display = "none";
        // selectedSource.innerHTML = selectedSource.toString();
      }
    });
}


// Render Articles
function renderArticle(json) {
    // Compiling the template source. Template function returns String!
    var template = Handlebars.compile(articleTemplate.innerHTML);
    articleWrapper.innerHTML = template(json.articles);
}

// See more about article
function seeMore(e) {
    var children = e.target.closest(".article").childNodes;

    for (var i=0; i < children.length; i++) {
        if (children[i].classList.contains("articleContent")) {
            var myValue= children[i].value;
            console.log(myValue);
        }
        // if (children[i].classList.contains("article-summary-description")) {
        //     var myValue= children[i].value;
        //     console.log(myValue);
        // }

    }
alert(myValue); // just to test

}
// Update Page
// -----------------------------------------------------------------------
