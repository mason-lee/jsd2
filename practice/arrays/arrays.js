/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */

// Your code here
var q1 = ["image1.png", "image2.png", "image3.png"];
console.log("Question 1", " ", q1);
/**
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
var q2 = q1[0];
console.log("Question 2", q2);
/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
var q3 = q1.length;
console.log("Question 3", q3);
/**
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
 */

// Your code here
var q4 = q1[q1.length-1];
console.log("Question 4", q4);

// ____________________________________________________________________________

/**
 * Arrays + Iteration
 */

/**
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use a for loop, a forEach loop function to increase
 * each value by 1. You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
var num = [1, 2, 3, 4];
var newArray = [];

function addNum(num) {
    var newNum = num + 1;
    newArray.push(newNum);
}

num.forEach(addNum);
console.log("Question 5", newArray);
/**
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */

// Your code here
var sum = 0;
var arrLength = newArray.length;

function addAll(element) {
    sum += element;
}

function calcAve(sum, length) {
    return sum / length;
}

newArray.forEach(addAll);
console.log("Question 6", calcAve(sum, arrLength));
// function addAllNew(element) {
//     var sum = 0;
//     sum += element;
//
//     function calcAve() {
//         return sum / arrLength;
//     }
// }
//

// console.log(newArray.forEach(addAllNew));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Assignment 2: Random Address Generator
//
// Write a script that can generate random addresses.
//
// 1. As a first step, create arrays that contain dummy data for each of the following:
//    1. street number,
//    2. street name,
//    3. city name,
//    4. state name
//    5. postal code
// 2. Your script should randomly select one item from each of these arrays and then use them to construct a random address
// 3. Each time you run the script, it should print a new randomly-generated address to the console.
// 4. For example: 1139 Grand Ave, Chicago, IL 60642
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var streetNumber = []
var streetName = []
var cityName = []
var stateName = []
var postalCode = []


console.log(streetNumber, streetName, ",", cityName, ",", stateName, postalCode);
