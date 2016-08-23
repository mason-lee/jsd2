// Structure
// ------------------------------------------------
var form     = document.querySelector("#message-form"),
    message  = document.querySelector("#message"),
    board    = document.querySelector(".message-board"),
    button   = document.querySelector(".post-msg-btn"),
    voteCount= document.querySelector(".voteCount"),
    msgList  = document.querySelector(".msg");

function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

// Setup
// ------------------------------------------------
var firebase = new Firebase("https://fan-practice.firebaseio.com/");

var app = {
    messages: []
};

// Templates
// ------------------------------------------------
var msgTemplate = document.querySelector("#message-template");

// Events
// ------------------------------------------------
window.addEventListener("load", getMsgLists);
button.addEventListener("click", addMessage);
board.addEventListener("click", msgClicked);

function msgClicked(e) {
    if (e.target.classList.contains("upVote")) {
        var target = e.target;
        var voteNum = parseInt(target.parentNode.lastElementChild.innerHTML);
        voteNum = voteNum + 1;

        console.log(voteNum);
    }
    else if (e.target.classList.contains("downVote")) {
        var target = e.target;
        var voteNum = parseInt(target.parentNode.lastElementChild.innerHTML);
        voteNum = voteNum - 1;
        console.log(voteNum);
    }
    else if (e.target.classList.contains("delete")) {
        // var target = e.target;
        // var voteNum = parseInt(target.parentNode.lastElementChild.innerHTML);
        // voteNum = voteNum + 1;
    }
}

// Event Handlers
// ------------------------------------------------
function addMessage(event) {
    event.preventDefault();

    var message = {
        id: guid(),
        content: message.value,
        voteCount: 0,
        dateCreated: Date.now()
    };

    // Add msg to array
    app.messages.push(message);

    // Save msg to Firebase
    saveMsg();

    // Emtpy the form
    message.value = "";

    renderMsg();
}

function renderMsg() {
    // Compiling the template source. Template function returns String!
    var template = Handlebars.compile(msgTemplate.innerHTML);
    board.innerHTML = template(app.messages);
}

// Firebase functions
// ------------------------------------------------
function dataChanged(snapshot) {
    // Error checking:
    // -check for empty database
    if (snapshot.val() === null) {
        return;
    }
    // Get the json data from firebase
    app = snapshot.val();

    // Render msg
    renderMsg();
}

function getMsgLists() {
    firebase.on("value", dataChanged);
};

function saveMsg() {
    firebase.set(app);
};
