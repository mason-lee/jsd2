function boom() {
    console.log("boom!");
}

var bomb = setTimeout(boom, 5000);

// clear timer example
function defuseBomb(func) {
    clearTimeout(bomb);
}

// Interval Setup
var i = 0;
function count() {
    i++;
    console.log("Count:", i);
}

var counter = setInterval(count, 2000);
