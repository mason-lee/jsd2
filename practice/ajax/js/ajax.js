// // Structure
// // ------------------------------------------------------------
// var list = document.querySelector(".list");
//
//
// // create path to ajax request
// var url = "https://api.consumerfinance.gov/data/hmda.json";
//
// // setup ajax request
// var jqxhr = $.getJSON(url, handleData);
//
//
// // callback function for ajax request
// // ajax callbacks expect the json data
// function handleData(json) {
//     console.log(json);
//     var concepts = json['_embedded']['concepts'];
//     concepts.forEach(function(elem) {
//         var li = document.createElement('li');
//         li.innerHTML = elem['description'];
//         list.appendChild(li);
//     });
// }







////////////////////////////////////////////////////////////////////////////////
// Structure
// ------------------------------------------------------------
var list = $(".list");
var spinnerDiv = $(".spinnerDiv");

// create path to ajax request
var url = "https://api.consumerfinance.gov/data/hmda.json";

// setup ajax request
var request = $.ajax({
    url: url,
    method: "GET",
    beforeSend: function() {
        spinnerDiv.addClass("spinner");
    },
    complete: function() {
        debugger;
        spinnerDiv.removeClass("spinner");
    }
});
