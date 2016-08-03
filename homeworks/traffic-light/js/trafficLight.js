// Setup
// ----------------------------------------------
var cautionFlashOn = false;
var cautionFlash;

// Structure
// ----------------------------------------------
// Controls
var stopBtn = document.querySelector(".stop-button");
var slowBtn = document.querySelector(".slow-button");
var goBtn = document.querySelector(".go-button");
var cautionBtn = document.querySelector(".caution-button");

// Traffic Lights
var trafficLight = document.querySelector("#traffic-light");
var stopLight = document.querySelector(".stop-light");
var slowLight = document.querySelector(".slow-light");
var goLight = document.querySelector(".go-light");

// Events
// ----------------------------------------------
stopBtn.addEventListener('click', stopFlash);
slowBtn.addEventListener('click', slowFlash);
goBtn.addEventListener('click', goFlash);
cautionBtn.addEventListener('click', cautionFlash);

// Event handlers
// ----------------------------------------------
function stopFlash() {
    trafficLight.classList.remove("go", "slow");
    if (cautionFlashOn === true) {
        clearInterval(cautionFlash);
        cautionFlashOn = false;
    }
    trafficLight.classList.add('stop');
}

function slowFlash() {
    trafficLight.classList.remove("go", "stop");
    if (cautionFlashOn === true) {
        clearInterval(cautionFlash);
        cautionFlashOn = false;
    }
    trafficLight.classList.add('slow');
}

function goFlash() {
    trafficLight.classList.remove("stop", "slow");
    if (cautionFlashOn === true) {
        clearInterval(cautionFlash);
        cautionFlashOn = false;
    }
    trafficLight.classList.add('go');
}


// -----------------------------------------------------
// Bonus
//-------------------------------------------------------
function cautionFlash() {
    trafficLight.classList.remove("go", "stop", "slow");

    if (cautionFlashOn === false) {
        cautionFlash = setInterval(function() {
            trafficLight.classList.toggle("slow");
        }, 500);
        cautionFlashOn = true;
    }
    else {
        console.log("It's already on.");
    }
}
