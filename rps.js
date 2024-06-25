//Setting variables that will access the buttons and score counts in the HTML
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const tieText = document.getElementById("result-tie");

//Defining variables for the amount of wins
let computerWinAmount = 0;
let playerWinAmount = 0;
let tieAmount = 0;

//Setting the event listeners to assign an outcome for the player's hand when a button is selected and then play a round of the game
rockButton.addEventListener("click", function(){
    let hand1 = "rock";
    let hand2 = computerPlay();
    playRound(hand1, hand2);
});

paperButton.addEventListener("click", function() {
    let hand1 = "paper";
    let hand2 = computerPlay();
    playRound(hand1, hand2);
});

scissorsButton.addEventListener("click", function() {
    let hand1 = "scissors";
    let hand2 = computerPlay();
    playRound(hand1, hand2);
});

//Setting the computerPlay function to randomly make a choice for the computer's hand
function computerPlay() {
    let choice = parseInt(Math.random()*10)%3;
    switch(choice) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissors";
            break;
    }
    return choice;
}

//Setting functions to increase the score totals based on who wins the game
function playerWin() {
    playerWinAmount++;
    playerScore.innerHTML = "Your wins: " + playerWinAmount;
}

function computerWin() {
    computerWinAmount++;
    computerScore.innerHTML = "Computer wins: " + computerWinAmount;
}

function tieWin() {
    tieAmount++;
    tieText.innerHTML = "Tie rounds: " + tieAmount;
}

//Setting a function called playRound that determines the winner of the game
function playRound(hand1, hand2) {
    if ( (hand1 === 'scissors' && hand2 === 'paper') ||
         (hand1 === 'rock' && hand2 === 'scissors') ||
         (hand1 === 'paper' && hand2 === 'rock') ) 
        {
        playerWin();
        } 
    
    else if ( (hand2 === 'scissors' && hand1 === 'paper') ||
              (hand2 === 'rock' && hand1 === 'scissors') ||
              (hand2 === 'paper' && hand1 === 'rock') )
        {
        computerWin();
        }

    else if ( (hand1 === 'scissors' && hand2 === 'scissors') ||
              (hand1 === 'rock' && hand2 === 'rock') ||
              (hand1 === 'paper' && hand2 === 'paper') )
        {
        tieWin(); 
        }
    
    else {
        return null;
    }
}

//Calling the function playRound
playRound();

