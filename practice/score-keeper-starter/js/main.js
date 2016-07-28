var addScoreButton = document.querySelector("#increase-5");
var subtractScoreButton = document.querySelector("#decrease-5");
var scoreWrapper = document.querySelector("#score");
var score = document.querySelector("#score-number");
var scoreNum = parseInt(score.innerHTML);
var setScoreButton = document.querySelector("#submit-custom-score");
var setScoreField = document.querySelector("#custom-score");
var alertBox = document.querySelector(".alert");

function addScore(score) {
    scoreNum += score;
}

function substractScore(score) {
    scoreNum -= score;
}

function showAlert(message) {
    alertBox.style.display = "block";
    alertBox.innerHTML = message;
}

function hideAlert() {
    alertBox.style.display = "none";
}


addScoreButton.addEventListener("click", function() {
    addScore(5);
    score.innerHTML = scoreNum;
    hideAlert();
});



subtractScoreButton.addEventListener("click", function() {
    var currentScore = scoreNum;
    substractScore(5);

    if (scoreNum < 0) {
        showAlert("Your score cannot be negative.");
        scoreNum = currentScore;
    }
    else {
        hideAlert();
        score.innerHTML = scoreNum;
    }
});

setScoreButton.addEventListener("click", function() {
    var enteredNum = setScoreField.value;
    var enteredValue = parseInt(enteredNum);

    if (Number.isInteger(enteredValue)) {
        var currentScore = scoreNum;
        var setScoreNum = setScoreField.value;
        var newScore = parseInt(setScoreNum);
        addScore(newScore);

        if (scoreNum < 0) {
            showAlert("Your score cannot be negative.");
            scoreNum = currentScore;
        }
        else {
            hideAlert();
            setScoreField.value = " ";
            score.innerHTML = scoreNum;
        }

    }

    else {
        console.log("hey");
        showAlert("Please only enter number.");
    }


});
