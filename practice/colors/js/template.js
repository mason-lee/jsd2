var body = document.querySelector("body");
var colorLists = document.querySelector(".color-lists");

colorLists.addEventListener("click", change);

function change(e) {
    if (e.target.tagName != "LI") {
        return;
    }
    // console.log(e.target.dataset.color);
    body.className = e.target.dataset.color;
}
