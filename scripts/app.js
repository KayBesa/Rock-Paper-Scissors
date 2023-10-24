/**
    Name: Kasonde Besa
    Script: app.js
    Description: Controls functionaly of simple JavaScript webApp of rock-paper-scissors that
                 a player can play against AI.
    Date: October 23rd, 2023
*/

// Get dynamic components on the webapp.
let userOptions = Array.from(document.getElementsByClassName("opt"));
let userScore = document.getElementById("playerScore");
let aiScore = document.getElementById("compScore");
let userCount = 0;
let aiCount = 0;

// Function that starts game and makes options clickable
const startGame = () => {
    userOptions.forEach(option => option.addEventListener("click", clickedOption));
}

// Saves user's clicked option
function clickedOption(e) {
    const id = e.target.id;
    gameResult(id);
}
// AI's choice between rock, paper, or scissors.
function aiOption() {
    options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)]
}

// Determines who won the round
function userWon(ai, user) {
    if (ai == "rock" && user == "scissors") {
        return 1;
    } else if (ai == "paper" && user == "rock") {
        return 1;
    } else if (ai == "scissors" && user == "paper") {
        return 1;
    } else if (ai == "rock" && user == "paper") {
        return 0;
    } else if (ai == "paper" && user == "scissors") {
        return 0;
    } else if (ai == "scissors" && user == "rock") {
        return 0;
    } else {
        return -1;
    }


}

// Configures who won the round
function gameResult(userChoice) {
    let aiChoice = aiOption();
    let num = userWon(aiChoice, userChoice);
    if (num == 0) {
        updateScore(0);
    } else if (num == 1) {
        updateScore(1);
    } else {
        updateScore(3);
    }

}

// Updates scores
function updateScore(Bool) {
    if (Bool == 0) {
        userScore.innerText = userCount++;
    } else if (Bool == 1) {
        aiScore.innerText = aiCount++;
    }
    console.log("Bool", Bool);
}

// Starts the game
startGame();