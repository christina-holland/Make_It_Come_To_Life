var _a, _b, _c;
//Accessing HTML elements using document.getElementById
//and setting them to the types set in the interfaces 
var elements = {
    rockButton: document.getElementById("rock"),
    paperButton: document.getElementById("paper"),
    scissorsButton: document.getElementById("scissors"),
    playerScore: document.getElementById("player-score"),
    computerScore: document.getElementById("computer-score"),
    tieText: document.getElementById("result-tie"),
};
//Defining scoring variable
var score = {
    playerWins: 0,
    computerWins: 0,
    ties: 0,
};
//Adding event listeners to handle button clicks and game play
(_a = elements.rockButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    playRound("rock", computerPlay());
});
(_b = elements.paperButton) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    playRound("paper", computerPlay());
});
(_c = elements.scissorsButton) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    playRound("scissors", computerPlay());
});
function computerPlay() {
    var choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock"; // Default case, though not expected to reach here
    }
}
//Defining functions to update and display scores on the HTML page
function updatePlayerScore() {
    if (elements.playerScore) {
        elements.playerScore.textContent = "Your wins: ".concat(score.playerWins);
    }
}
function updateComputerScore() {
    if (elements.computerScore) {
        elements.computerScore.textContent = "Computer wins: ".concat(score.computerWins);
    }
}
function updateTieScore() {
    if (elements.tieText) {
        elements.tieText.textContent = "Tie rounds: ".concat(score.ties);
    }
}
//Creating the function called playRound using TypeScript
function playRound(playerChoice, computerChoice) {
    if ((playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock')) {
        score.playerWins++;
        updatePlayerScore();
    }
    else if ((computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'paper' && playerChoice === 'rock')) {
        score.computerWins++;
        updateComputerScore();
    }
    else {
        score.ties++;
        updateTieScore();
    }
}
