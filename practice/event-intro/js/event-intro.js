// // Setup
// var counter = 0;
//
// // Structure
// var body = document.querySelector("body");
//
//
// // Create Element
// var a = document.createElement("a");
// a.innerHTML = "Events";
// a.href = "http://google.com";
// body.appendChild(a);
//
// // Create Event
// var me = document.createEvent("MouseEvent");
// me.initEvent("click");
//
// // h1.dispatchEvent(me);
//
//
// a.addEventListener("click", count);
//
//
// function count(event) {
//     counter++;
//     console.log('count',counter);
//     console.log(me.type);
//     console.log(me.target);
//     event.preventDefault();
// }
// Setup
var counter = 0;

// Structure
var body = document.querySelector("body");


// Create Element
var h1 = document.createElement("h1");
h1.innerHTML = "Events";
body.appendChild(h1);

// Create Event
var me = document.createEvent("MouseEvent");
me.initEvent("click");

// h1.dispatchEvent(me);


h1.addEventListener("click", count);


function count(e) {
    counter++;
    console.log('count',counter);
    console.log(e.type);
    console.log(e.target.innerHTML);    
}
