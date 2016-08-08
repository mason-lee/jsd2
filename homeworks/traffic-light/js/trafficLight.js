// Setup
// ----------------------------------------------
var cautionFlashOn = false;
var cautionFlash = 0;
var goTrafficLightOn = false;
var goTrafficLight = 0;

// Structure
// ----------------------------------------------
// Controls
var stopBtn = document.querySelector(".stop-button");
var slowBtn = document.querySelector(".slow-button");
var goBtn = document.querySelector(".go-button");
var cautionBtn = document.querySelector(".caution-button");
var runBtn = document.querySelector(".run-button");

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
runBtn.addEventListener('click', run);

// Event handlers
// ----------------------------------------------
function stopFlash() {
    trafficLight.classList.remove("go", "slow");

    if (cautionFlashOn === true) {
        clearInterval(cautionFlash);
        cautionFlashOn = false;
    }

    if (goTrafficLightOn == true) {
        clearInterval(goTrafficLight);
        goTrafficLight = 0;
        goTrafficLightOn = false;
    }

    trafficLight.classList.add('stop');
}

function slowFlash() {
    trafficLight.classList.remove("go", "stop");

    if (cautionFlashOn === true) {
        clearInterval(cautionFlash);
        cautionFlashOn = false;
    }

    if (goTrafficLightOn == true) {
        clearInterval(goTrafficLight);
        goTrafficLight = 0;
        goTrafficLightOn = false;
    }

    trafficLight.classList.add('slow');
}

function goFlash() {
    trafficLight.classList.remove("stop", "slow");

    if (cautionFlashOn === true) {
        clearInterval(cautionFlash);
        cautionFlashOn = false;
    }

    if (goTrafficLightOn == true) {
        clearInterval(goTrafficLight);
        goTrafficLight = 0;
        goTrafficLightOn = false;
    }

    trafficLight.classList.add('go');
}


// -----------------------------------------------------
// Bonus
//-------------------------------------------------------
function cautionFlash() {
    console.log("are we calling it?");
    trafficLight.classList.remove("go", "stop", "slow");

    if (goTrafficLightOn == true) {
        clearInterval(goTrafficLight);
        goTrafficLight = 0;
        goTrafficLightOn = false;
        console.log("running");
    }

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

// -----------------------------------------------------
// Super Bonus
//-------------------------------------------------------
var lightTiming = 1000;

// Define traffic light behavior
function goTraffic() {
    // Turn on red light
    trafficLight.classList.add('stop');
    // Turn off red light
    setTimeout(function() {
        trafficLight.classList.remove('stop');
    }, lightTiming);
    // Turn on caution light
    setTimeout(function() {
        trafficLight.classList.add('slow');
    },lightTiming);
    // Turn off caution light
    setTimeout(function() {
        trafficLight.classList.remove('slow');
    },lightTiming * 2);
    // Turn on go light
    setTimeout(function() {
        trafficLight.classList.add('go');
    },lightTiming * 2);
    // Turn off go light
    setTimeout(function() {
        trafficLight.classList.remove('go');
    },lightTiming * 3);
}

function run() {
    // Clear out all other Lights
    trafficLight.classList.remove("go", "stop", "slow");

    // Stop the caution flash
    if (cautionFlashOn === true) {
        clearInterval(cautionFlash);
        cautionFlashOn = false;
    }

    if (goTrafficLightOn == false) {
        // Call first
        goTraffic();

        // And repeat
        goTrafficLight = setInterval(goTraffic, lightTiming * 3);

        goTrafficLightOn = true;
    }

}
