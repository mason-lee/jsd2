// Vocab words:
// 1. constructor
// 2. prototype
// 3. new
// 4. this

// Constructor
var Fighter = function(name) {
    this.name = name;
    this.punch = function() {
        console.log(this.name + " punches!");
    }
}

// Instance of objects
var ryu = new Fighter("Ryu");
var guile = new Fighter("Guile");
