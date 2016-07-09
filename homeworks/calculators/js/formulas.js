
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////

// Celcius to Farenheit
function calcCelciusToFarenheit(c) {
    var farenheit = c * (9/5) + 32;
    return farenheit;
}

// Farenheit to Celcius
function calcFahrenheitToCelcius(f) {
    var celcius = (f - 32) * 5/9;
    return celcius;
}

// Radius to circumference
function calcCircumference(r) {
    var circumference = 2 * Math.PI * r;
    return circumference;
}

// Calculate longest side
function calcLongestSide(a, b) {
    var longestSide = Math.sqrt((a * a) + (b * b));
    return longestSide;
}
